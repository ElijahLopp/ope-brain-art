import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import {format} from 'date-fns';
import {ContentState, convertToRaw, EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Loading from '~/components/atoms/Loading';
import AttachmentCard from '~/components/molecules/AttachmentCard';
import AttachmentUpload from '../AttachmentUpload';
import {SessionManageProps} from './interfaces';
import * as S from './styles';

const SessionManage: React.FC<SessionManageProps> = ({
  goBackClick,
  onSave,
  patient,
  data,
  loading,
  removeSession,
}) => {
  const editorRef: any = useRef();

  const [editorState, setEditorState] = useState(() => {
    if (data?.isNew) {
      return EditorState.createEmpty();
    }
    const contentBlock = htmlToDraft(data.body);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
    );
    return EditorState.createWithContent(contentState);
  });
  const [openRemove, setOpenRemove] = React.useState(false);
  const [editable, setEditable] = useState(data?.isNew);
  const [openAttachment, setOpenAttachment] = useState<null | number>(null);

  const handleEditorChange = (content: any) => setEditorState(content);
  const handleEnableEditor = useCallback(() => {
    setEditable(!editable);
  }, [editable]);

  const handleOpenAttachment = useCallback(() => {
    if (data?.id) {
      setOpenAttachment(data?.id);
    }
  }, [data]);

  const handleCloseAttachment = useCallback(() => {
    setOpenAttachment(null);
  }, []);

  const handleSave = async () => {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (data?.id) {
      await onSave(data.id, body);
    }

    setEditable(false);
  };

  useEffect(() => {
    if (editable && editorRef.current) {
      editorRef.current.focus();
    }
  }, [editable]);

  const setEditorReference = (ref: any) => {
    editorRef.current = ref;
  };

  const handleOpenRemove = useCallback(() => {
    setOpenRemove(true);
  }, []);

  const handleCloseRemove = useCallback(() => {
    setOpenRemove(false);
  }, []);

  const handleRemoveSession = useCallback(async () => {
    if (data?.id) {
      await removeSession(data.id);
      handleCloseRemove();
    }
  }, [data, handleCloseRemove]);

  return (
    <S.Container>
      <Loading active={loading} />
      <S.Header>
        <Tooltip title="Voltar" aria-label="Voltar">
          <S.IconButton type="button" aria-label="Voltar" onClick={goBackClick}>
            <ArrowBackIosOutlinedIcon fontSize="small" />
          </S.IconButton>
        </Tooltip>
        <S.Title>{`${patient.nome.split(' ')[0]} - Sessão ${format(
          new Date(data.createdAt),
          'dd/MM/yyyy hh:mm',
        )}`}</S.Title>
        {!editable ? (
          <Tooltip title="Editar" aria-label="Editar">
            <S.IconButton
              type="button"
              aria-label="editar"
              onClick={handleEnableEditor}>
              <EditOutlinedIcon fontSize="small" />
            </S.IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Salvar" aria-label="Salvar">
            <S.IconButton
              type="button"
              aria-label="salvar"
              onClick={handleSave}>
              <SaveOutlinedIcon fontSize="small" />
            </S.IconButton>
          </Tooltip>
        )}
        <Tooltip title="Novo Anexo" aria-label="Novo Anexo">
          <S.IconButton
            type="button"
            aria-label="Novo Anexo"
            onClick={handleOpenAttachment}>
            <AttachFileOutlinedIcon fontSize="small" />
          </S.IconButton>
        </Tooltip>
        {!editable && (
          <Tooltip title="Remover" aria-label="Remover">
            <S.IconButton
              type="button"
              aria-label="remover"
              onClick={handleOpenRemove}>
              <DeleteOutlineIcon fontSize="small" />
            </S.IconButton>
          </Tooltip>
        )}
      </S.Header>
      <S.ContainerRecord>
        <S.DescriptionRecord>
          <Editor
            editorRef={setEditorReference}
            spellCheck
            toolbarHidden={!editable}
            readOnly={!editable}
            editorState={editorState}
            localization={{
              locale: 'pt',
            }}
            toolbar={{
              options: ['inline', 'fontSize', 'history'],
              inline: {inDropdown: false},
              list: {inDropdown: true},
              link: {inDropdown: true},
              history: {inDropdown: false},
            }}
            onEditorStateChange={handleEditorChange}
          />
        </S.DescriptionRecord>
        <S.Divider />
        <S.AttachmentsList>
          <S.AttachmentsTitle>Anexos</S.AttachmentsTitle>
          <S.AttachmentsGrid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={1}>
                {data.attachments?.map((attachment) => (
                  <Grid item key={attachment.uri}>
                    <AttachmentCard data={attachment} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </S.AttachmentsGrid>
        </S.AttachmentsList>
      </S.ContainerRecord>
      <AttachmentUpload open={openAttachment} onClose={handleCloseAttachment} />

      <Dialog
        open={openRemove}
        onClose={handleCloseRemove}
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {'Deseja realmente remover a sessão?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao remover a sessão, será removido todos os dados da sessão
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemove} color="primary">
            Não
          </Button>
          <Button onClick={handleRemoveSession} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </S.Container>
  );
};

export default SessionManage;
