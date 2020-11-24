import React, {useCallback, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import {useImmer} from 'use-immer';
import {convertDateSchedule, convertDateSchedules} from '~/helpers/schedule';
import api from '~/services/api';
import {ScheduleData, SchedulesResponseData} from './interfaces';
import ScheduleContext from './ScheduleContext';

const ScheduleProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const [loading, setLoading] = useState(false);
  const [loadingManage, setLoadingManage] = useState(false);
  const [scheduleSelected, setScheduleSelected] = useState<ScheduleData | null>(
    null,
  );
  const [schedulesAll, updateSchedulesAll] = useImmer<SchedulesResponseData[]>(
    [],
  );

  const selectSchedule = useCallback((data: ScheduleData | null) => {
    setScheduleSelected(data);
  }, []);

  const getSchedules = useCallback(async () => {
    setLoading(true);
    try {
      let params: any = {};
      const response = await api.get(`/schedules`, {
        params,
      });

      updateSchedulesAll(() => {
        return convertDateSchedules(response.data);
      });
    } catch (err) {
      addToast('Erro ao obter agendamentos', {
        appearance: 'error',
        autoDismiss: true,
      });
    } finally {
      setLoading(false);
    }
  }, [addToast, updateSchedulesAll]);

  const createSchedule = useCallback(
    async (data: ScheduleData) => {
      setLoadingManage(true);
      try {
        const response = await api.post(`/schedules`, data);
        updateSchedulesAll((draft) => {
          draft.push(convertDateSchedule(response.data));
        });
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
    [updateSchedulesAll, addToast],
  );
  const updateSchedule = useCallback(
    async (id: number, data: ScheduleData) => {
      setLoadingManage(true);
      try {
        const response = await api.put(`/schedules/${id}`, data);

        const findIndex = schedulesAll.findIndex((o) => o.id === id);

        const upSchedule = {
          ...schedulesAll[findIndex],
          ...convertDateSchedule(response.data),
        };
        updateSchedulesAll((draft) => {
          draft[findIndex] = upSchedule;
        });
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
    [updateSchedulesAll, addToast, schedulesAll],
  );
  return (
    <ScheduleContext.Provider
      value={{
        loading,
        loadingManage,
        scheduleSelected,
        schedulesAll,
        selectSchedule,
        createSchedule,
        updateSchedule,
        getSchedules,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleProvider;
