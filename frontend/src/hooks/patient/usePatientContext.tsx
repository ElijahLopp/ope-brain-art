import {useContext} from 'react';
import {PatientContextData} from './interfaces';
import PatientContext from './PatientContext';

function usePatientContext(): PatientContextData {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatientContext must be used within a PatientProvider');
  }
  return context;
}

export default usePatientContext;
