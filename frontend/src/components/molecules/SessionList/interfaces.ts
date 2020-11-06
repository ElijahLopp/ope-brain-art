import {SessionData} from '~/hooks/session/interfaces';

export interface SessionListProps {
  onClick: (session: SessionData) => void;
  data: SessionData[];
}
