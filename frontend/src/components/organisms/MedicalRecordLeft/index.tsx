import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import SearchIcon from '@material-ui/icons/Search';
import React, {useCallback} from 'react';
import PatientCard from '~/components/molecules/PatientCard';
import {PatientData} from '~/hooks/patient/interfaces';
import usePatientContext from '~/hooks/patient/usePatientContext';
import * as S from './styles';

const MedicalRecordLeft: React.FC<any> = ({openManagePatient}) => {
  const {patientAll, selectPatient} = usePatientContext();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSelectedPatient = useCallback(
    (patient: PatientData) => {
      console.log('aquiiiiiiiii', patient);
      selectPatient(patient);
    },
    [selectPatient],
  );
  const handleOpenManagePatient = useCallback(() => {
    openManagePatient('new');
  }, [openManagePatient]);

  return (
    <S.Container>
      <S.Header>
        <S.InputSearch
          placeholder="Pesquisar Paciênte"
          inputProps={{'aria-label': 'Pesquisar Paciênte'}}
        />
        <S.IconButton type="submit" aria-label="search">
          <SearchIcon fontSize="small" />
        </S.IconButton>
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
          count={100}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </S.PaginationContainer>
    </S.Container>
  );
};

export default MedicalRecordLeft;
