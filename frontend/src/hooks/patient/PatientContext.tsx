import {createContext} from 'react';
import {PatientContextData} from './interfaces';

const PatientContext = createContext<PatientContextData>(
  {} as PatientContextData,
);
export default PatientContext;
