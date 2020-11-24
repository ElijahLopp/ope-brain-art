import {PatientData} from '~/hooks/patient/interfaces';

export interface MedicalRecordLeftProps {
  openManagePatient: (open: null | PatientData) => void;
}
