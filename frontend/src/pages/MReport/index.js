import './index.css';
import * as React from 'react'; import { applyCategoryColor } from '../../helper';

import { SampleBase } from '../../sample-base';
import * as dataSource from '../../datasource.json';

import NavNar from "../../components/NavBar";
import Footer from "../../components/Footer";

import './index.css';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';



export class MReport extends SampleBase {
  onViewChange(args) {
    this.scheduleObj.currentView = args.value;
    this.scheduleObj.dataBind();
  }
  onEventRendered(args) {
    applyCategoryColor(args, this.scheduleObj.currentView);
  }
  render() {
    return (<div className='schedule-control-section'>
      <>
        <NavNar />
        <Footer />
      </>
      <div className='col-lg-3'>
        <GridComponent dataSource={dataSource.Patient} height='100%'>
          <ColumnsDirective>
            <ColumnDirective field='Name' headerText='Nome' width='120'></ColumnDirective>
          </ColumnsDirective>
        </GridComponent>
      </div>
      <div className='col-lg-7'>
        <GridComponent dataSource={dataSource.MReport} height='100%'>
          <ColumnsDirective>
            <ColumnDirective field='id' headerText='Sessão' width='120'></ColumnDirective>
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>
    );
  }
}


export default MReport;