import {createContext} from 'react';
import {ScheduleContextData} from './interfaces';

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData,
);
export default ScheduleContext;
