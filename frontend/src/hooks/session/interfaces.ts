export interface AttachmentsData {
  id: number;
  nome: string;
  uri: string;
  type: string;
  createdAt: string;
}
export interface SessionData {
  id?: number;
  createdAt: string;
  body: string;
  attachments: AttachmentsData[];
  isNew?: boolean;
}

export interface SessionsResponseData {
  count: number;
  results: SessionData[];
}

export interface SessionContextData {
  loading: boolean;
  loadingAttachment: boolean;
  perPage: number;
  page: number;
  sessionsAll: SessionsResponseData;
  sessionSelected: SessionData | null;
  getAllSessionByPatient: (patientId: number) => Promise<void>;
  getSessions: (patientId: number) => Promise<void>;
  createSession: (patientId: number) => Promise<void>;
  addAttachment: (sessionId: number, data: any) => Promise<void>;
  saveSession: (id: number, data: string) => Promise<void>;
  selectSession: (session: SessionData | null) => void;
  changePage: (newPage: number, patientId: number) => void;
  changePerPage: (newPerPage: number, patientId: number) => void;
}
