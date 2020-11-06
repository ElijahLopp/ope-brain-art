import {PatientData} from '~/hooks/patient/interfaces';

export interface PatientCardProps {
  onClick: (data: PatientData) => void;
  data: PatientData;

  isSelected: boolean;
}
