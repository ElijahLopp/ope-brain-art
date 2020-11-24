import React, {useCallback, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {useImmer} from 'use-immer';
import api from '~/services/api';
import FinanceContext from './FinanceContext';
import {FinanceData, FinancesResponseData} from './interfaces';

const FinanceProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [sort] = useState<{
    changedColumn: string;
    direction: 'desc' | 'asc';
  }>({
    changedColumn: 'pain',
    direction: 'asc',
  });
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingManage, setLoadingManage] = useState(false);
  const [financeSelected, setFinanceSelected] = useState<FinanceData | null>(
    null,
  );
  const [financesAll, updateFinancesAll] = useImmer<FinancesResponseData>({
    count: 0,
    results: [],
  });

  const selectFinance = useCallback((data: FinanceData | null) => {
    setFinanceSelected(data);
  }, []);

  const getFinances = useCallback(async () => {
    setLoading(true);
    try {
      let params: any = {
        perPage,
        page,
      };

      if (search) {
        params = {
          ...params,
          search,
        };
      }

      const response = await api.get(`/finances`, {
        params,
      });

      updateFinancesAll(() => {
        return response.data;
      });
    } catch (err) {
      addToast('Erro ao obter agendamentos', {
        appearance: 'error',
        autoDismiss: true,
      });
    } finally {
      setLoading(false);
    }
  }, [addToast, updateFinancesAll, perPage, search, page]);

  const createFinance = useCallback(
    async (data: FinanceData) => {
      setLoadingManage(true);
      try {
        await api.post(`/finances`, data);
        // updateFinancesAll((draft) => {
        //   draft.push(response.data);
        // });
        addToast('Agendamento realizado com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        addToast('Erro ao criar agendamento', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoadingManage(false);
      }
    },
    [addToast],
  );

  const updateFinance = useCallback(
    async (id: number, data: FinanceData) => {
      setLoadingManage(true);
      try {
        // const response = await api.put(`/finances/${id}`, data);

        // const findIndex = financesAll.findIndex((o) => o.id === id);

        // const upFinance = {
        //   ...financesAll[findIndex],
        //   ...response.data,
        // };
        // updateFinancesAll((draft) => {
        //   draft[findIndex] = upFinance;
        // });
        addToast('Agendamento atualizado com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        addToast('Erro ao atualizar agendamento', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoadingManage(false);
      }
    },
    [addToast],
  );

  const updateFinancePaid = useCallback(
    async (id: number, paid: string) => {
      setLoading(true);
      try {
        const response = await api.put(`/finances/${id}/paid`, {
          paid,
        });

        const findIndex = financesAll.results.findIndex((o) => o.id === id);

        const upFinance = {
          ...financesAll.results[findIndex],
          ...response.data,
        };
        updateFinancesAll((draft) => {
          draft.results[findIndex] = upFinance;
        });
        addToast('Finança atualizada com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        addToast('Erro ao atualizar finança', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoading(false);
      }
    },
    [updateFinancesAll, addToast, financesAll],
  );

  const onSort = useCallback((changedColumn, direction) => {
    // console.log(changedColumn, direction);
  }, []);

  const changePerPage = useCallback(
    (newPerPage) => {
      if (newPerPage !== perPage) {
        setPerPage(newPerPage);
        setPage(0);
      }
    },
    [perPage],
  );
  const changePage = useCallback(
    (newPage) => {
      if (newPage !== page) {
        setPage(newPage);
      }
    },
    [page],
  );
  const onSearch = useCallback(
    (text) => {
      setSearch(text);
    },
    [setSearch],
  );

  return (
    <FinanceContext.Provider
      value={{
        loading,
        loadingManage,
        financeSelected,
        financesAll,
        perPage,
        page,
        sort,
        updateFinancePaid,
        selectFinance,
        createFinance,
        updateFinance,
        getFinances,
        onSort,
        onSearch,
        changePerPage,
        changePage,
      }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
