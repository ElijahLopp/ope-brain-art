import {PatientData, SessionData} from '~/hooks/patient/interfaces';

export interface SessionManageProps {
  data: SessionData;
  patient: PatientData;
  goBackClick: () => void;
}
