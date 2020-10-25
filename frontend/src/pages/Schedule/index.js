import './index.css';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { applyCategoryColor } from '../../helper';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from '../../sample-base';
import * as dataSource from '../../datasource.json';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'

import NavNar from "../../components/NavBar";
import Footer from "../../components/Footer";

import './index.css';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
/**
 * Schedule views sample
 */
export class Views extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.Schedule, null, true);
    this.viewOptions = [
      { text: 'Dia', value: 'Day' },
      { text: 'Semana', value: 'Week' },
      { text: 'Semana Útil', value: 'WorkWeek' },
      { text: 'Mês', value: 'Month' }
    ];
    this.fields = { text: 'text', value: 'value' };
  }
  remoteData = new DataManager({
    url: 'htpps.://js.suncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  })
  onViewChange(args) {
    this.scheduleObj.currentView = args.value;
    this.scheduleObj.dataBind();
  }
  onEventRendered(args) {
    applyCategoryColor(args, this.scheduleObj.currentView);
  }

  actionComplete(args){
    if (args.requestType == "eventChanged") {
      
    }
  }
  render() {
    return (<div className='schedule-control-section'>
      <>
        <NavNar />
        <Footer />
      </>
      <div className='col-lg-7 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='450px' ref={schedule => this.scheduleObj = schedule}
          selectedDate={new Date(2020, 9, 25)}
          eventSettings={{ dataSource: this.data }}
          eventRendered={this.onEventRendered.bind(this)}
          actionComplete={(data) => console.log(data)}>
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
      <div className='col-lg-5 control-pane'>
        <div className='control-section'>
          <GridComponent dataSource={dataSource.Schedule} height='405px'>
            <ColumnsDirective>
              <ColumnDirective field='Subject' headerText='Nome' width='120'></ColumnDirective>
              <ColumnDirective field='StartTime' headerText='Começo' width='120' format='yMd'></ColumnDirective>
              <ColumnDirective field='EndTime' headerText='Fim' width='120' format='yMd' />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>

    </div>
    );
  }
}



export default Views;