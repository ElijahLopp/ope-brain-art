export interface PatientData {
  id?: number;
  avatar: FileList | string | null;
  nome: string;
  email: string;
  rg: string;
  cpf: string;
  nomeMae: string;
  nomePai: string;
  telefone: string;
  celular: string;
  rua: string;
  bairro: string;
  cep: string;
  numero: number;
  complemento: string;
  dataNascimento: string;
}

export interface PatientResponseData {
  count: number;
  results: PatientData[];
}

export interface PatientContextData {
  loading: boolean;
  loadingManage: boolean;
  perPage: number;
  page: number;
  patientAll: PatientResponseData;
  patientSelected: PatientData | null;
  getAll: () => Promise<PatientResponseData>;
  getPatientOne: (id: string) => Promise<PatientData>;
  createPatient: (data: PatientData) => Promise<void>;
  updatePatient: (id: number, data: PatientData) => Promise<void>;
  removePatient: (id: number) => Promise<boolean>;
  selectPatient: (patient: PatientData) => void;
  changePage: (newPage: number) => void;
  changePerPage: (newPerPage: number) => void;
  onSearch: (text: string) => void;
  searchPatient: (text: string) => Promise<PatientData[]>;
}
