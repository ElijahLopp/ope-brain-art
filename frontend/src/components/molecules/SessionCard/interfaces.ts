import {SessionData} from '~/hooks/patient/interfaces';

export interface SessionCardProps {
  data: SessionData;
  onClick: (session: SessionData) => void;
}
