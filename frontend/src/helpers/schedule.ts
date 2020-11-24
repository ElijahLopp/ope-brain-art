import {SchedulesResponseData} from '~/hooks/schedule/interfaces';

export const convertDateSchedule = (schedule: SchedulesResponseData) => {
  return {
    ...schedule,
    start: new Date(schedule.start),
    end: new Date(schedule.end),
  };
};
export const convertDateSchedules = (schedules: SchedulesResponseData[]) => {
  return schedules.map(convertDateSchedule);
};
