import React, {useEffect} from 'react';
import ManagePatient from '~/components/organisms/ManagePatient';
import MedicalRecordLeft from '~/components/organisms/MedicalRecordLeft';
import MedicalRecordRight from '~/components/organisms/MedicalRecordRight';
import {PatientData} from '~/hooks/patient/interfaces';
import usePatientContext from '~/hooks/patient/usePatientContext';
import * as S from './styles';

const MedicalRecord: React.FC = () => {
  const {getAll} = usePatientContext();
  const [
    openManagePatient,
    setOpenManagePatient,
  ] = React.useState<null | PatientData>(null);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const handleClickOpen = (data: null | PatientData) => {
    setOpenManagePatient(data);
  };

  const handleClose = () => {
    setOpenManagePatient(null);
  };

  return (
    <S.Container>
      <ManagePatient open={openManagePatient} onClose={handleClose} />
      <MedicalRecordLeft openManagePatient={handleClickOpen} />
      <MedicalRecordRight openManagePatient={handleClickOpen} />
    </S.Container>
  );
};

export default MedicalRecord;
