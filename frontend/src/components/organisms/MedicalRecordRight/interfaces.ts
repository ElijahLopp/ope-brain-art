import {PatientData} from '~/hooks/patient/interfaces';

export interface MedicalRecordRightProps {
  openManagePatient: (open: null | PatientData) => void;
}
