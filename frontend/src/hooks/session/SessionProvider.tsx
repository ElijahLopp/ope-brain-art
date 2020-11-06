import React, {useCallback, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {useImmer} from 'use-immer';
import api from '~/services/api';
import {SessionData, SessionsResponseData} from './interfaces';
import SessionContext from './SessionContext';

const SessionProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [sessionSelected, setSessionSelected] = useState<SessionData | null>(
    null,
  );
  const [sessionsAll, updateSessionsAll] = useImmer<SessionsResponseData>({
    count: 0,
    results: [],
  });

  const changePerPage = useCallback(
    (newPerPage: number, patientId: number) => {
      if (newPerPage !== perPage) {
        setPerPage(newPerPage);
        setPage(0);
      }
    },
    [perPage],
  );
  const changePage = useCallback(
    (newPage: number, patientId: number) => {
      if (newPage !== page) {
        setPage(newPage);
      }
    },
    [page],
  );

  const selectSession = useCallback((data: SessionData | null) => {
    setSessionSelected(data);
  }, []);
  const getAllSessionByPatient = useCallback(
    async (patientId: number) => {
      setSessionSelected(null);
      updateSessionsAll(() => {
        return {count: 0, results: []};
      });
    },
    [updateSessionsAll],
  );
  const getSessions = useCallback(
    async (patientId: number) => {
      setLoading(true);
      try {
        let params: any = {
          perPage,
          page,
        };
        const response = await api.get(`/patients/${patientId}/sessions`, {
          params,
        });
        updateSessionsAll(() => {
          return response.data;
        });
      } catch (err) {
        addToast('Erro ao obter sessões', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, updateSessionsAll, perPage, page],
  );
  const createSession = useCallback(
    async (patientId: number) => {
      setLoading(true);
      try {
        const newSession = {
          createdAt: new Date().toISOString(),
          body: '',
        };
        const response = await api.post(
          `/patients/${patientId}/sessions`,
          newSession,
        );
        selectSession({
          ...response.data,
          isNew: true,
        });
        getSessions(patientId);
      } catch (err) {
        addToast('Erro ao criar sessões', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoading(false);
      }
    },
    [getSessions, addToast, selectSession],
  );
  const saveSession = useCallback(
    async (id: number, data: string) => {
      setLoading(true);
      try {
        const response = await api.put(`/sessions/${id}`, {
          body: data,
        });

        updateSessionsAll((draft) => {
          const findIndex = draft.results.findIndex((o) => o.id === id);
          draft.results[findIndex] = response.data;
        });
        setSessionSelected(response.data);
      } catch (err) {
        addToast('Erro ao atualizar sessão', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoading(false);
      }
    },
    [updateSessionsAll, addToast],
  );

  return (
    <SessionContext.Provider
      value={{
        loading,
        sessionSelected,
        sessionsAll,
        perPage,
        page,
        changePerPage,
        changePage,
        selectSession,
        createSession,
        saveSession,
        getAllSessionByPatient,
        getSessions,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
