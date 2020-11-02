export interface AttachmentsData {
  id: number;
  uri: string;
  type: string;

  date: string;
}
export interface SessionData {
  id?: string | number;
  date: string;
  body: string;
  patientId: string | number;
  attachments?: AttachmentsData[];
}

export interface PatientData {
  id: number;
  name: string;
}
export interface SessionsResponseData {
  count: number;
  results: SessionData[];
}
export interface PatientResponseData {
  count: number;
  results: PatientData[];
}

export interface PatientContextData {
  loading: boolean;
  loadingSessions: boolean;
  perPage: number;
  page: number;
  patientAll: PatientResponseData;
  sessionsAll: SessionsResponseData;
  patientSelected: PatientData | null;
  sessionSelected: SessionData | null;
  getAll: () => Promise<PatientResponseData>;
  getPatientOne: (id: string) => Promise<PatientData>;
  selectPatient: (patient: PatientData) => void;
  selectSession: (session: SessionData | null) => void;
  changePage: (newPage: number) => void;
  changePerPage: (newPerPage: number) => void;
  onSearch: (text: string) => void;
}
