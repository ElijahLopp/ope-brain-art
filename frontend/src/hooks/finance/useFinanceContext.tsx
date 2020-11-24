import {useContext} from 'react';
import FinanceContext from './FinanceContext';
import {FinanceContextData} from './interfaces';

function useFinanceContext(): FinanceContextData {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinanceContext must be used within a FinanceProvider');
  }
  return context;
}

export default useFinanceContext;
