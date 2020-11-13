import {
  checkBoxChange,
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Filter,
  Edit,
  EditSettingsModel
} from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { CheckBox } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './index.css';
import { SampleBase } from '../../sample-base';
import * as dataSource from '../../datasource.json';

const baseURL: string = 'http://localhost:8080'
const data: DataManager = new DataManager({
  adaptor: new UrlAdaptor(),
  insertUrl: baseURL + '/financeiro'
});

const editOptions: EditSettingsModel = { allowEditing: true };

export class Finance extends SampleBase {
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div style={{ display: 'inline-block' }}>
            <div style={{ width: '70%' }} className="grid">
              <h3 className="title">Lista de pagamento</h3>
              <GridComponent
                id="Grid"
                allowPaging={true}
                pageSettings={{ pageSize: 10 }}
                dataSource={dataSource.Schedule}
                allowFiltering={true}
                editSettings={editOptions}>
                <ColumnsDirective>
                  <ColumnDirective
                    field="Name"
                    headerText="Paciente"
                    width="100"
                    textAlign="Left"></ColumnDirective>
                  <ColumnDirective
                    field="responsible"
                    headerText="Responsável"
                    width="100"
                    textAlign="Left"></ColumnDirective>
                    <ColumnDirective
                      field="contact"
                      headerText="Contato"
                      width="100"
                      textAlign="Left"
                    ></ColumnDirective>
                  <ColumnDirective
                    field="StartTime"
                    headerText="Data Realizada"
                    width="130"
                    textAlign="Left"
                    format='dMy'
                    editType='datepickeredit'></ColumnDirective>
                  <ColumnDirective
                    field="Value"
                    headerText="Valor"
                    width="130"
                    format="C2"
                    editType='numericedit'
                    textAlign="Left"></ColumnDirective>
                  <ColumnDirective
                    field="paid"
                    headerText="Pago"
                    displayAsCheckBox={true}
                    type='boolean'
                    width='90'
                    allowFiltering={false}
                    editType='booleanEdit'
                  ></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Page, Filter, Edit]} />
              </GridComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finance;
