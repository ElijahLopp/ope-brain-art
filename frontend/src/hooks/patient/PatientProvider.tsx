import React, {useCallback, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {useImmer} from 'use-immer';
import {converteDataToFromData} from '~/helpers/patient';
import api from '~/services/api';
import {PatientData, PatientResponseData} from './interfaces';
import PatientContext from './PatientContext';

const PatientProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const [loading, setLoading] = useState(false);
  const [loadingManage, setLoadingManage] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [patientSelected, setPatientSelected] = useState<PatientData | null>(
    null,
  );
  const [patientAll, updatePatientAll] = useImmer<PatientResponseData>({
    count: 0,
    results: [],
  });

  const getAll = useCallback(async () => {
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

      const response = await api.get('/patients/', {
        params,
      });

      updatePatientAll(() => {
        return response.data;
      });
      return response.data;
    } catch (err) {
      return {
        count: 0,
        results: [],
      };
    } finally {
      setLoading(false);
    }
  }, [updatePatientAll, page, perPage, search]);

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
  const selectPatient = useCallback(async (data: PatientData) => {
    setPatientSelected(data);
  }, []);

  const createPatient = useCallback(
    async (data: PatientData) => {
      setLoadingManage(true);
      try {
        const formData = converteDataToFromData(data);
        await api.post('/patients', formData);
        getAll();
        addToast('Paciente criado com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        addToast('Erro ao criar o paciente', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoadingManage(false);
      }
    },
    [addToast, getAll],
  );

  const updatePatient = useCallback(
    async (id: number, data: PatientData) => {
      setLoadingManage(true);
      try {
        const formData = converteDataToFromData(data);
        const response = await api.put(`/patients/${id}`, formData);
        updatePatientAll((draft) => {
          const findIndex = draft.results.findIndex((o) => o.id === id);
          draft.results[findIndex] = response.data;
        });
        setPatientSelected(response.data);
        addToast('Paciente atualizado com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        addToast('Erro ao atualizar o paciente', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
        setLoadingManage(false);
      }
    },
    [addToast, updatePatientAll],
  );

  const searchPatient = useCallback(
    async (text: string) => {
      try {
        let params: any = {
          search: text,
        };
        const response = await api.get('/patients/', {
          params,
        });
        return response.data.results;
      } catch (err) {
        addToast('Erro ao buscar o paciente', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
      return [];
    },
    [addToast],
  );
  //----------------- SESSIONS ---------------------//
  return (
    <PatientContext.Provider
      value={{
        loading,
        loadingManage,
        patientAll,
        patientSelected,
        perPage,
        page,
        getAll,
        onSearch,
        changePerPage,
        changePage,
        selectPatient,
        getPatientOne,
        createPatient,
        updatePatient,
        searchPatient,
      }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
