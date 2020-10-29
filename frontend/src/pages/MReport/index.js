import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Inject, Toolbar } from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './data';
import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import NavNar from "../../components/NavBar";
import Footer from "../../components/Footer";
export class Mreport extends SampleBase {
  constructor() {
    super(...arguments);
    this.modes = [
      { text: 'Parent', value: 'Parent' },
      { text: 'Child', value: 'Child' },
      { text: 'Both', value: 'Both' },
      { text: 'None', value: 'None' },
    ];
    this.toolbarOptions = ['Search'];
  }
  onChange(sel) {
    let mode = sel.value.toString();
    this.treegridInstance.search('');
    this.treegridInstance.searchSettings.hierarchyMode = mode;
  }
  render() {
    return (
      <div className='control-pane'>
        <>
          <NavNar />
          <Footer />
        </>
        <div className='control-section'>
          <div className='col-md-3'>
            <TreeGridComponent dataSource={sampleData} ref={treegrid => this.treegridInstance = treegrid} treeColumnIndex={1} childMapping='subtasks' height='350' allowPaging='true' toolbar={this.toolbarOptions}>
              <ColumnsDirective>
            <ButtonComponent cssClass='e-small e-round' iconCss='e-btn-sb-icons e-add-icon' isPrimary></ButtonComponent>
                <ColumnDirective field='ID' headerText='Id' width='10' textAlign='Left'></ColumnDirective>
                <ColumnDirective field='Name' headerText='Nome' width='25'></ColumnDirective>
              </ColumnsDirective>
              <Inject services={[Filter, Page, Toolbar]} />
            </TreeGridComponent>
          </div>
        </div>

      </div>);
  }
}


export default Mreport;