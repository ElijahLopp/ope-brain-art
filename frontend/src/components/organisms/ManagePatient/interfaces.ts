import {PatientData} from '~/hooks/patient/interfaces';

export interface ManagePatientProps {
  open: null | PatientData;
  onClose: () => void;
}
