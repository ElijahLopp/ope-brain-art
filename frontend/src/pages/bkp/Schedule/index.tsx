import {extend} from '@syncfusion/ej2-base';
import {TreeViewComponent} from '@syncfusion/ej2-react-navigations';
import {
  CellClickEventArgs,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import Footer from '../../../components/Footer';
import NavNar from '../../../components/NavBar';
import * as dataSource from '../../../datasource.json';
import {applyCategoryColor} from '../../../helper';
import {SampleBase} from '../../../sample-base';
import './index.css';

/**
 * Schedule views sample
 */
export class Views extends SampleBase {
  private scheduleObj!: ScheduleComponent;

  private data: Object[] = extend(
    [],
    (dataSource as any).Schedule,
    {},
    true,
  ) as Object[];

  private viewOptions: {[key: string]: Object}[] = [
    {text: 'Day', value: 'Day'},
    {text: 'Week', value: 'Week'},
    {text: 'WorkWeek', value: 'WorkWeek'},
    {text: 'Month', value: 'Month'},
  ];

  onViewChange(args: any) {
    this.scheduleObj.currentView = args.value;
    this.scheduleObj.dataBind();
  }

  onEventRendered(args: any) {
    applyCategoryColor(args, this.scheduleObj.currentView);
  }

  onTreeDragStop(args: any): void {
    const cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(
      args.target,
    );
    if (cellData != null) {
      const eventData: {[key: string]: object} = {
        Subject: args.draggedNodeData.text,
        StartTime: cellData.startTime,
        EndTime: cellData.endTime,
      };
      this.scheduleObj.addEvent(eventData);
    }
  }

  public field: Object = {
    dataSource: dataSource.Patient,
    id: 'Id',
    text: 'Name',
  };

  render() {
    return (
      <div className="schedule-control-section">
        <>
          <NavNar />
          <Footer />
        </>
        <div className="col-lg-9 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              height="450px"
              ref={(schedule) => {
                if (schedule != null) {
                  this.scheduleObj = schedule;
                }
              }}
              selectedDate={new Date(2020, 9, 25)}
              eventSettings={{dataSource: this.data}}
              eventRendered={this.onEventRendered.bind(this)}
              actionComplete={(data) => console.log(data)}>
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
                <ViewDirective option="WorkWeek" />
                <ViewDirective option="Month" />
              </ViewsDirective>
              <Inject
                services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]}
              />
            </ScheduleComponent>
          </div>
        </div>

        <div className="treeview-title-container col-lg-3">
          {' '}
          Lista de Pacientes
        </div>
        <div className="treeview-component  col-lg-3">
          <TreeViewComponent
            fields={this.field}
            allowDragAndDrop
            nodeDragStop={this.onTreeDragStop.bind(this)}
          />
        </div>
        {/* <div className='col-lg-5 control-pane'>
        <div className='control-section'>
          <GridComponent dataSource={dataSource.Schedule} height='405px'>
            <ColumnsDirective>
              <ColumnDirective field='Subject' headerText='Nome' width='120'></ColumnDirective>
              <ColumnDirective field='StartTime' headerText='Começo' width='120' format='yMd'></ColumnDirective>
              <ColumnDirective field='EndTime' headerText='Fim' width='120' format='yMd' />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div> */}
      </div>
    );
  }
}

export default Views;
