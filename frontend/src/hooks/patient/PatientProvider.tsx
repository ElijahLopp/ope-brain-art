import React, {useCallback, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {useImmer} from 'use-immer';
import {
  PatientData,
  PatientResponseData,
  SessionData,
  SessionsResponseData,
} from './interfaces';
import PatientContext from './PatientContext';

const fake: PatientResponseData = {
  count: 2,
  results: [
    {
      id: 1,
      name: 'Andrew Vazzoler',
    },
    {
      id: 2,
      name: 'Elias Lopes',
    },
    {
      id: 3,
      name: 'Brando',
    },
    {
      id: 4,
      name: 'Matheus',
    },
  ],
};

const Sessions = {
  count: 4,
  results: [
    {
      id: 1,
      date: '2020-10-30T17:04:35.365Z',
      patientId: 1,
      body: '<p>TESTE 1</p>',
    },
    {
      id: 2,
      date: '2020-10-30T17:04:35.365Z',
      patientId: 1,
      body: '<p>TESTE 2</p>',
    },
    {
      id: 3,
      date: '2020-10-30T17:04:35.365Z',
      patientId: 1,
      body: '<p>TESTE 3</p>',
    },
    {
      id: 4,
      date: '2020-10-30T17:04:35.365Z',
      patientId: 1,
      body: '<p>TESTE 4</p>',
    },
  ],
};
const PatientProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const [loading, setLoading] = useState(false);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [patientSelected, setPatientSelected] = useState<PatientData | null>(
    null,
  );
  const [sessionSelected, setSessionSelected] = useState<SessionData | null>(
    null,
  );
  const [patientAll, updatePatientAll] = useImmer<PatientResponseData>({
    count: 0,
    results: [],
  });
  const [sessionsAll, updateSessionsAll] = useImmer<SessionsResponseData>({
    count: 0,
    results: [],
  });

  const getAll = useCallback(async () => {
    setLoading(true);
    try {
      updatePatientAll(() => {
        return fake;
      });
      return fake;
    } catch (err) {
      return {
        count: 0,
        results: [],
      };
    } finally {
      setLoading(false);
    }
  }, [updatePatientAll]);

  const getPatientOne = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const getState = patientAll.results.find(
          (o) => o.id === parseInt(id, 10),
        );

        return getState || ({} as PatientData);
      } catch (err) {
        addToast('Erro ao obter dados do paciente', {
          appearance: 'error',
          autoDismiss: true,
        });
        return {} as PatientData;
      } finally {
        setLoading(false);
      }
    },
    [addToast, patientAll.results],
  );

  const changePerPage = useCallback(
    (newPerPage: number) => {
      if (newPerPage !== perPage) {
        setPerPage(newPerPage);
        setPage(0);
      }
    },
    [perPage],
  );
  const changePage = useCallback(
    (newPage: number) => {
      if (newPage !== page) {
        setPage(newPage);
      }
    },
    [page],
  );
  const onSearch = useCallback(
    (text: string) => {
      setSearch(text);
    },
    [setSearch],
  );
  const selectPatient = useCallback(
    (data: PatientData) => {
      setLoadingSessions(true);
      setSessionSelected(null);
      updateSessionsAll(() => {
        return {count: 0, results: []};
      });
      setTimeout(() => {
        updateSessionsAll(() => {
          return Sessions;
        });
        setLoadingSessions(false);
      }, 1000);
      setPatientSelected(data);
    },
    [updateSessionsAll],
  );
  const selectSession = useCallback((data: SessionData | null) => {
    setSessionSelected(data);
  }, []);
  const SaveSession = useCallback(
    (data: SessionData) => {
      if (patientSelected) {
        const newSession: SessionData = {
          date: new Date().toISOString(),
          body: '',
          patientId: patientSelected.id,
        };

        updateSessionsAll((draft) => {
          draft.count += 1;
          draft.results.push(newSession);
        });
        setSessionSelected(newSession);
      }
    },
    [patientSelected, updateSessionsAll],
  );

  return (
    <PatientContext.Provider
      value={{
        loading,
        loadingSessions,
        patientAll,
        patientSelected,
        sessionSelected,
        sessionsAll,
        perPage,
        page,
        getAll,
        onSearch,
        changePerPage,
        changePage,
        selectPatient,
        selectSession,
        getPatientOne,
      }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
