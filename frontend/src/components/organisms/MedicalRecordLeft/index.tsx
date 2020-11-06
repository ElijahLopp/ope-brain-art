import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import React, {useCallback} from 'react';
import InputSearch from '~/components/atoms/InputSearch';
import Loading from '~/components/atoms/Loading';
import PatientCard from '~/components/molecules/PatientCard';
import {PatientData} from '~/hooks/patient/interfaces';
import usePatientContext from '~/hooks/patient/usePatientContext';
import {MedicalRecordLeftProps} from './interfaces';
import * as S from './styles';

const MedicalRecordLeft: React.FC<MedicalRecordLeftProps> = ({
  openManagePatient,
}) => {
  const {
    patientAll,
    page,
    perPage,
    loading,
    selectPatient,
    changePage,
    changePerPage,
    onSearch,
  } = usePatientContext();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    changePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    changePerPage(parseInt(event.target.value, 10));
  };
  const handleSelectedPatient = useCallback(
    (patient: PatientData) => {
      selectPatient(patient);
    },
    [selectPatient],
  );
  const handleOpenManagePatient = useCallback(() => {
    openManagePatient({} as PatientData);
  }, [openManagePatient]);

  return (
    <S.Container>
      <S.Header>
        <InputSearch onSearch={onSearch} placeholderText="Pesquisar Paciênte" />
        <S.Divider orientation="vertical" />
        <Tooltip title="Novo Paciente" aria-label="Novo Paciente">
          <S.IconButton
            type="button"
            aria-label="novo paciente"
            onClick={handleOpenManagePatient}>
            <PersonAddOutlinedIcon fontSize="small" />
          </S.IconButton>
        </Tooltip>
      </S.Header>

      <S.Content>
        <Loading active={loading} />
        <S.ListaPatient>
          {patientAll.results.map((item) => {
            return (
              <PatientCard
                key={item.id}
                data={item}
                onClick={handleSelectedPatient}
              />
            );
          })}
        </S.ListaPatient>
        <S.PaginationContainer>
          <TablePagination
            component="div"
            count={patientAll.count}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={perPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </S.PaginationContainer>
      </S.Content>
    </S.Container>
  );
};

export default MedicalRecordLeft;
