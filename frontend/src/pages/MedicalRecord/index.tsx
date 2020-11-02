import React, {useEffect} from 'react';
import MedicalRecordLeft from '~/components/organisms/MedicalRecordLeft';
import MedicalRecordRight from '~/components/organisms/MedicalRecordRight';
import usePatientContext from '~/hooks/patient/usePatientContext';
import * as S from './styles';

const MedicalRecord: React.FC = () => {
  const {getAll} = usePatientContext();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <S.Container>
      <MedicalRecordLeft />
      <MedicalRecordRight />
    </S.Container>
  );
};

export default MedicalRecord;
