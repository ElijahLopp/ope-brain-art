import {extend, L10n} from '@syncfusion/ej2-base';
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
import * as dataSource from '~/datasource.json';
import {applyCategoryColor} from '~/helper';
import {SampleBase} from '~/sample-base';
import './index.css';

L10n.load({
  pt: {
    schedule: {
      day: 'dia',
      week: 'semana',
      workWeek: 'Semana de trabalho',
      month: 'Mês',
      agenda: 'Agenda',
      weekAgenda: 'Agenda de da semana',
      workWeekAgenda: 'Agenda da Semana de Trabalho',
      monthAgenda: 'Agenda do mês',
      today: 'Hoje',
      noEvents: 'Sem eventos',
      allDay: 'Todo o dia',
      start: 'Início',
      end: 'Fim',
      more: 'Mais',
      close: 'Fechar',
      cancel: 'Cancelar',
      noTitle: '(Sem título)',
      delete: 'Apagar',
      deleteEvent: 'Excluir evento',
      selectedItems: 'Ítens selecionados',
      deleteSeries: 'Apagar série',
      edit: 'Editar',
      editSeries: 'Editar série',
      editEvent: 'Editar evento',
      createEvent: 'Criar',
      subject: 'Assunto',
      addTitle: 'Adicionar título',
      moreDetails: 'Mais detalles',
      save: 'Salvar',
      editContent: 'Deseja editar apenas este evento ou toda a série?',
      deleteRecurrenceContent:
        'Deseja eliminar só este evento ou toda a série?',
      deleteContent: 'Tem certeza que deseja apagar este evento?',
      newEvent: 'Novo evento',
      title: 'Título',
      location: 'Localização',
      description: 'Descrição',
      timezone: 'Time Zone',
      startTimezone: 'Hora inicial',
      endTimezone: 'Hora final',
      repeat: 'Repetir',
      saveButton: 'Salvar',
      cancelButton: 'Cancelar',
      deleteButton: 'Apagar',
      recurrence: 'Recorrência',
      editRecurrence: 'Editar recorrência',
      repeats: 'Repete',
      alert: 'Alerta',
      startEndError:
        'A data de finalização selecionada ocorre antes da da de início.',
      invalidDateError: 'O valor da data é invalida.',
      ok: 'Confirmar',
      occurrence: 'Ocorrência',
      series: 'Série',
      previous: 'Anterior',
      next: 'Próximo',
      timelineDay: 'Alocação de Hoje',
      timelineWeek: 'Alocação Semanal',
      timelineWorkWeek: 'Alocação do trabalho semanal',
      timelineMonth: 'Alocação mensal',
    },
    recurrenceeditor: {
      none: 'Nenhum',
      daily: 'Diário',
      weekly: 'Semanal',
      monthly: 'Mensal',
      month: 'Mês',
      yearly: 'Anual',
      never: 'Nunca',
      until: 'Até',
      count: 'Contar',
      first: 'Primeiro',
      second: 'Segundo',
      third: 'Tercero',
      fourth: 'Quarto',
      last: 'Último',
      repeat: 'Repetir',
      repeatEvery: 'Repita cada',
      on: 'Repita en',
      end: 'Fim',
      onDay: 'Dia',
      days: 'Dias)',
      weeks: 'Semanas)',
      months: 'Meses)',
      years: 'Anos)',
      every: 'cada',
      summaryTimes: 'vecês)',
      summaryOn: 'em',
      summaryUntil: 'até',
      summaryRepeat: 'Repita',
      summaryDay: 'dias)',
      summaryWeek: 'semanas)',
      summaryMonth: 'meses)',
      summaryYear: 'anos)',
      monthWeek: 'mês semana',
      monthPosition: 'posição do mês',
      monthExpander: 'mês expansor',
      yearExpander: 'Expansor de ano',
      repeatInterval: 'Intervalo de repetição',
    },
    calendar: {
      today: 'Hoje',
    },
  },
});
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
        <div className="col-lg-9 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              height="calc(100vh - 64px)"
              locale="pt"
              ref={(schedule) => {
                if (schedule != null) {
                  this.scheduleObj = schedule;
                }
              }}
              dateFormat="dd/MM/yyyy"
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
      </div>
    );
  }
}

export default Views;
