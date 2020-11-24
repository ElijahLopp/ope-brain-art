import {PatientData} from '~/hooks/patient/interfaces';

export interface FinanceData {
  id?: number;
  startDate: string;
  endDate: string;
  patient: PatientData;
}

export interface FinancesResponseData {
  count: number;
  results: FinanceData[];
}

export interface FinanceContextData {
  loading: boolean;
  loadingManage: boolean;
  financesAll: FinancesResponseData;
  financeSelected: FinanceData | null;
  perPage: number;
  page: number;
  sort: {
    changedColumn: string;
    direction: 'desc' | 'asc';
  };
  getFinances: () => Promise<void>;
  createFinance: (data: any) => Promise<void>;
  updateFinance: (id: number, data: FinanceData) => Promise<void>;
  updateFinancePaid: (id: number, paid: string) => Promise<void>;
  selectFinance: (finance: FinanceData | null) => void;
  onSort: (changedColumn: string, direction: 'desc' | 'asc') => void;
  onSearch: (text: string | null) => void;
  changePage: (newPage: number) => void;
  changePerPage: (newPerPage: number) => void;
}
