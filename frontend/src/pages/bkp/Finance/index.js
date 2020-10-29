import './index.css';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, RowDD, Inject } from '@syncfusion/ej2-react-grids';
import { orderDetails } from './data';
import { SampleBase } from './sample-base';
import NavNar from "../../components/NavBar";
import Footer from "../../components/Footer";

export class Finance extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = orderDetails;
        this.rowDropSettings = { targetID: 'DestGrid' };
        this.srcSelectionSettings = { type: 'Multiple' };
        this.destSelectionSettings = { type: 'Multiple' };
        this.rowDropSettings2 = { targetID: 'Grid' };
    }
    render() {
        return (<div className='control-pane'>
        <>
          <NavNar />
          <Footer />
        </>
            <div className='control-section'>
                <div style={{ display: 'inline-block' }}>
                    <div style={{ float: 'left', width: '49%' }} className='firstgrid'>
                        <h3>Pendentes</h3>
                        <GridComponent id="Grid" dataSource={this.data} allowPaging={true} pageSettings={{ pageCount: 1 }} allowRowDragAndDrop={true} rowDropSettings={this.rowDropSettings} selectionSettings={this.srcSelectionSettings}>
                            <ColumnsDirective>
                                <ColumnDirective field='responsible' headerText='Responsável' width='120' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='patient' headerText='Paciente' width='130' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='contact' headerText='Contato' width='130' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='expirationDate' headerText='Validade' width='130' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='sessionValue' headerText='Valor' width='120' format='C2' textAlign='Right' />
                            </ColumnsDirective>
                            <Inject services={[Page, RowDD]} />
                        </GridComponent>
                    </div>
                    <div style={{ float: 'Right', width: '49%' }} className='lastgrid'>
                        <h3>Pagos</h3>
                        <GridComponent id="DestGrid" allowPaging={true} pageSettings={{ pageCount: 2 }} allowRowDragAndDrop={true} rowDropSettings={this.rowDropSettings2} selectionSettings={this.destSelectionSettings}>
                            <ColumnsDirective>
                                <ColumnDirective field='responsible' headerText='Responsável' width='120' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='patient' headerText='Paciente' width='130' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='sessionValue' headerText='Valor' width='130' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='expirationDate' headerText='Validade' width='130' textAlign='Left'></ColumnDirective>
                                <ColumnDirective field='payDay' headerText='Pago' width='120' format='C2' textAlign='Right' />
                            </ColumnsDirective>
                            <Inject services={[Page, RowDD]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Finance;