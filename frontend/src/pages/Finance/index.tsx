import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MUIDataTable, {
  debounceSearchRender,
  MUIDataTableColumn,
} from 'mui-datatables';
import React, {useEffect} from 'react';
import Loading from '~/components/atoms/Loading';
import useFinanceContext from '~/hooks/finance/useFinanceContext';
import * as S from './styles';

const Finance: React.FC = () => {
  const {
    getFinances,
    financesAll,
    updateFinancePaid,
    loading,
    onSort,
    onSearch,
  } = useFinanceContext();
  useEffect(() => {
    getFinances();
  }, [getFinances]);

  const columns: MUIDataTableColumn[] = [
    {
      name: 'id',
      label: 'Transação',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'patient',
      label: 'Paciente',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'date',
      label: 'Data Realizada',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          const formatter = new Intl.DateTimeFormat('pt-BR', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });

          return formatter.format(new Date(value));
        },
      },
    },
    {
      name: 'valor',
      label: 'Valor',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          const nf = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });

          return nf.format(value);
        },
      },
    },
    {
      name: 'paid',
      label: 'Recebido',
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value: any, tableMeta, updateValue) => {
          return (
            <FormControlLabel
              label={value === 'yes' ? 'Sim' : 'Não'}
              value={value === 'yes' ? 'yes' : 'no'}
              control={
                <Switch
                  color="primary"
                  checked={value === 'yes' ? true : false}
                  value={value === 'yes' ? 'yes' : 'no'}
                />
              }
              onChange={(event: any) => {
                const paid = event.target.value === 'no' ? 'yes' : 'no';
                const id = tableMeta.rowData[0];
                updateFinancePaid(id, paid);
                updateValue(paid);
              }}
            />
          );
        },
      },
    },
  ];
  return (
    <S.Container>
      <Loading active={loading} />
      <MUIDataTable
        title={'Financeiro'}
        data={financesAll.results}
        columns={columns}
        options={{
          filter: false,
          count: financesAll.count,
          serverSide: true,
          elevation: 0,
          search: false,
          customSearchRender: debounceSearchRender(500),
          selectableRows: 'none',
          onSearchChange: onSearch,
          onColumnSortChange: onSort,
          searchPlaceholder: 'Pequisa pelo paciente',
          textLabels: {
            body: {
              noMatch: 'Desculpe, nenhum registro encontrado',
              toolTip: 'Ordenar',
              columnHeaderTooltip: (column) => `Ordenado por ${column.label}`,
            },
            pagination: {
              next: 'Proxima',
              previous: 'Anterior',
              rowsPerPage: 'Registro por pagina:',
              displayRows: 'de',
            },
            toolbar: {
              search: 'Pesquisar',
              downloadCsv: 'Download CSV',
              print: 'Imprimir',
              viewColumns: 'Exibição de Colunas',
              filterTable: 'Filtrar',
            },
            filter: {
              all: 'Todos',
              title: 'Filtros',
              reset: 'REDEFINIR',
            },
            viewColumns: {
              title: 'Exibir Colunas',
              titleAria: 'Exibir/Ocultar Colunas',
            },
          },
        }}
      />
    </S.Container>
  );
};

export default Finance;
