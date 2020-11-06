import {PatientData} from '~/hooks/patient/interfaces';
import {SessionData} from '~/hooks/session/interfaces';

export interface SessionManageProps {
  data: SessionData;
  patient: PatientData;

  loading: boolean;
  goBackClick: () => void;
  onSave: (id: number, body: string) => Promise<void>;
}
