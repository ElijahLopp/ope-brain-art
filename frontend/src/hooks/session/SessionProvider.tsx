import React, {useCallback, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {useImmer} from 'use-immer';
import {converteDataToFromData} from '~/helpers/session';
import api from '~/services/api';
import {SessionData, SessionsResponseData} from './interfaces';
import SessionContext from './SessionContext';

const SessionProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const [loading, setLoading] = useState(false);
  const [loadingAttachment, setLoadingAttachment] = useState(false);
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

        const findIndex = sessionsAll.results.findIndex((o) => o.id === id);

        const upSession = {
          ...sessionsAll.results[findIndex],
          ...response.data,
        };

        console.log();
        updateSessionsAll((draft) => {
          draft.results[findIndex] = upSession;
        });
        setSessionSelected(upSession);
      } catch (err) {
        addToast('Erro ao atualizar sessão', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoading(false);
      }
    },
    [updateSessionsAll, addToast, sessionsAll],
  );

  const addAttachment = useCallback(
    async (sessionId: number, data: any) => {
      setLoadingAttachment(true);
      try {
        const formData = converteDataToFromData(data);
        const response = await api.post(
          `/sessions/${sessionId}/attachments`,
          formData,
        );
        const findIndex = sessionsAll.results.findIndex(
          (o) => o.id === sessionId,
        );

        const oldAttachments = sessionsAll.results[findIndex].attachments || [];

        const upSession = {
          ...sessionsAll.results[findIndex],
          attachments: [...oldAttachments, response.data],
        };

        updateSessionsAll((draft) => {
          draft.results[findIndex] = upSession;
        });

        setSessionSelected(upSession);

        addToast('Arquivo anexado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        console.log(err);
        addToast('Erro ao fazer upload do arquivo', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoadingAttachment(false);
      }
    },
    [addToast, updateSessionsAll, sessionsAll],
  );

  return (
    <SessionContext.Provider
      value={{
        loading,
        loadingAttachment,
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
        addAttachment,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
