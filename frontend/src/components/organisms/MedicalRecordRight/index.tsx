import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React, {useCallback, useState} from 'react';
import Loading from '~/components/atoms/Loading';
import SessionList from '~/components/molecules/SessionList';
import {uriAvatar} from '~/helpers/patient';
import {SessionData} from '~/hooks/patient/interfaces';
import usePatientContext from '~/hooks/patient/usePatientContext';
import SessionManage from '../SessionManage';
import {MedicalRecordRightProps} from './interfaces';
import * as S from './styles';

const MedicalRecordRight: React.FC<MedicalRecordRightProps> = ({
  openManagePatient,
}) => {
  const {
    patientSelected,
    loadingSessions,
    sessionsAll,
    selectSession,
    sessionSelected,
  } = usePatientContext();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const handleSessionGoBackClick = () => {
    selectSession(null);
  };

  const handleOpenManagePatient = useCallback(() => {
    openManagePatient(patientSelected);
  }, [openManagePatient, patientSelected]);

  const handleViewSession = (session: SessionData) => {
    selectSession(session);
  };

  if (!patientSelected) {
    return (
      <S.Container>
        <S.Header>
          <S.NotSelectPatient>
            <S.NotSelectPatientText>
              Selecione um paciente
            </S.NotSelectPatientText>
          </S.NotSelectPatient>
        </S.Header>
      </S.Container>
    );
  }
  const handleNewSession = () => {
    const newSession: SessionData = {
      date: new Date().toISOString(),
      body: '',
      patientId: patientSelected?.id,
    };
    selectSession(newSession);
  };
  return (
    <>
      {!sessionSelected ? (
        <S.Container>
          <S.Header>
            <S.AvatarContainer uri={uriAvatar(patientSelected.avatar)} />
            <S.Title>{patientSelected.nome}</S.Title>
            <Tooltip title="Nova Sessão" aria-label="Nova Sessão">
              <S.IconButton
                type="button"
                aria-label="novo paciente"
                onClick={handleNewSession}>
                <CreateNewFolderOutlinedIcon fontSize="small" />
              </S.IconButton>
            </Tooltip>
            <Tooltip title="Editar Paciente" aria-label="Editar Paciente">
              <S.IconButton
                type="button"
                aria-label="editar paciente"
                onClick={handleOpenManagePatient}>
                <EditOutlinedIcon fontSize="small" />
              </S.IconButton>
            </Tooltip>
          </S.Header>
          <S.Content>
            <Loading active={loadingSessions} />
            <SessionList
              data={sessionsAll.results}
              onClick={handleViewSession}
            />
            <S.PaginationContainer>
              <TablePagination
                component="div"
                count={sessionsAll.count}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </S.PaginationContainer>
          </S.Content>
        </S.Container>
      ) : (
        <SessionManage
          data={sessionSelected}
          patient={patientSelected}
          goBackClick={handleSessionGoBackClick}
        />
      )}
    </>
  );
};

export default MedicalRecordRight;
