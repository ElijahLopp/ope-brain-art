import {createContext} from 'react';
import {SessionContextData} from './interfaces';

const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData,
);
export default SessionContext;
