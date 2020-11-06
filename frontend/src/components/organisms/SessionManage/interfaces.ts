import {PatientData, SessionData} from '~/hooks/patient/interfaces';

export interface SessionManageProps {
  data: SessionData;
  patient: PatientData;

  loading: boolean;
  goBackClick: () => void;
  onSave: (id: number, body: string) => Promise<void>;
}
