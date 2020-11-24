import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React, {useCallback, useEffect} from 'react';
import Loading from '~/components/atoms/Loading';
import SessionList from '~/components/molecules/SessionList';
import {uriAvatar} from '~/helpers/patient';
import usePatientContext from '~/hooks/patient/usePatientContext';
import {SessionData} from '~/hooks/session/interfaces';
import useSessionContext from '~/hooks/session/useSessionContext';
import SessionManage from '../SessionManage';
import {MedicalRecordRightProps} from './interfaces';
import * as S from './styles';

const MedicalRecordRight: React.FC<MedicalRecordRightProps> = ({
  openManagePatient,
}) => {
  const {patientSelected} = usePatientContext();
  const {
    saveSession,
    loading,
    sessionSelected,
    selectSession,
    createSession,
    sessionsAll,
    page,
    perPage,
    changePerPage,
    changePage,
    getSessions,
    removeSession,
  } = useSessionContext();

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      patientSelected?.id && changePage(newPage, patientSelected.id);
    },
    [changePage, patientSelected],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      patientSelected?.id &&
        changePerPage(parseInt(event.target.value, 10), patientSelected.id);
    },
    [changePerPage, patientSelected],
  );

  const handleSessionGoBackClick = useCallback(() => {
    selectSession(null);
  }, [selectSession]);

  const handleOpenManagePatient = useCallback(() => {
    openManagePatient(patientSelected);
  }, [openManagePatient, patientSelected]);

  const handleViewSession = useCallback(
    (session: SessionData) => {
      selectSession(session);
    },
    [selectSession],
  );
  const handleRemoveSession = useCallback(
    async (id: number) => {
      if (patientSelected?.id) {
        return await removeSession(id, patientSelected?.id);
      } else {
        return false;
      }
    },
    [selectSession, patientSelected],
  );

  useEffect(() => {
    patientSelected?.id && getSessions(patientSelected.id);
  }, [patientSelected, getSessions]);

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
    if (patientSelected?.id) {
      createSession(patientSelected.id);
    }
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
            <Loading active={loading} />
            {loading || sessionsAll.results.length > 0 ? (
              <SessionList
                data={sessionsAll.results}
                onClick={handleViewSession}
              />
            ) : (
              <S.NotSessionContainer>
                <S.NotSessionText>
                  Ainda não tem nenhuma sessão
                </S.NotSessionText>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNewSession}>
                  Criar a primeira sessão
                </Button>
              </S.NotSessionContainer>
            )}

            <S.PaginationContainer>
              <TablePagination
                component="div"
                count={sessionsAll.count}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={perPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </S.PaginationContainer>
          </S.Content>
        </S.Container>
      ) : (
        <SessionManage
          data={sessionSelected}
          patient={patientSelected}
          loading={loading}
          goBackClick={handleSessionGoBackClick}
          onSave={saveSession}
          removeSession={handleRemoveSession}
        />
      )}
    </>
  );
};

export default MedicalRecordRight;
