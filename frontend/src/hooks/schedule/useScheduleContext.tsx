import {useContext} from 'react';
import {ScheduleContextData} from './interfaces';
import ScheduleContext from './ScheduleContext';

function useScheduleContext(): ScheduleContextData {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error(
      'useScheduleContext must be used within a ScheduleProvider',
    );
  }
  return context;
}

export default useScheduleContext;
