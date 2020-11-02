import {SessionData} from '~/hooks/patient/interfaces';

export interface SessionListProps {
  onClick: (session: SessionData) => void;
  data: SessionData[];
}
