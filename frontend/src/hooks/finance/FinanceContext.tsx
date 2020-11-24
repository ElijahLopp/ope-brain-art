import {createContext} from 'react';
import {FinanceContextData} from './interfaces';

const FinanceContext = createContext<FinanceContextData>(
  {} as FinanceContextData,
);
export default FinanceContext;
