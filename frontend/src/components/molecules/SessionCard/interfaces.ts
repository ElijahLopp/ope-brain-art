import {SessionData} from '~/hooks/session/interfaces';

export interface SessionCardProps {
  data: SessionData;
  onClick: (session: SessionData) => void;
}
