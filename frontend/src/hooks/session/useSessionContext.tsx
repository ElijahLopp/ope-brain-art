import {useContext} from 'react';
import {SessionContextData} from './interfaces';
import SessionContext from './SessionContext';

function useSessionContext(): SessionContextData {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }
  return context;
}

export default useSessionContext;
