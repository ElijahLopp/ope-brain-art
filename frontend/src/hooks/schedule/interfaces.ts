import {PatientData} from '~/hooks/patient/interfaces';

export interface ScheduleData {
  id?: number;
  startDate: string;
  endDate: string;
  patient: PatientData;
}

export interface SchedulesResponseData {
  id: number;
  start: Date;
  end: Date;
  patient: {id: number; nome: string};
}

export interface ScheduleContextData {
  loading: boolean;
  loadingManage: boolean;
  schedulesAll: SchedulesResponseData[];
  scheduleSelected: ScheduleData | null;
  getSchedules: () => Promise<void>;
  createSchedule: (data: any) => Promise<void>;
  updateSchedule: (id: number, data: ScheduleData) => Promise<void>;
  removeSchedule: (id: number) => Promise<boolean>;
  selectSchedule: (schedule: ScheduleData | null) => void;
}
