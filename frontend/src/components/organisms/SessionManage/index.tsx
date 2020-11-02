import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import {format} from 'date-fns';
import {ContentState, convertToRaw, EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import React, {useEffect, useRef, useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {SessionManageProps} from './interfaces';
import * as S from './styles';

const SessionManage: React.FC<SessionManageProps> = ({
  goBackClick,
  patient,
  data,
}) => {
  const editorRef: any = useRef();

  const [editorState, setEditorState] = useState(() => {
    if (!data.id) {
      return EditorState.createEmpty();
    }
    const contentBlock = htmlToDraft(data.body);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
    );
    return EditorState.createWithContent(contentState);
  });
  const [editable, setEditable] = useState(!data.id);

  const handleEditorChange = (content: any) => setEditorState(content);
  const handleEnableEditor = () => {
    setEditable(!editable);
  };
  const handleSave = () => {
    setEditable(false);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  useEffect(() => {
    if (!data.id && editorRef.current) {
      editorRef.current.focus();
    }
  }, [data.id]);

  const setEditorReference = (ref: any) => {
    editorRef.current = ref;
  };

  return (
    <S.Container>
      <S.Header>
        <Tooltip title="Voltar" aria-label="Voltar">
          <S.IconButton type="button" aria-label="Voltar" onClick={goBackClick}>
            <ArrowBackIosOutlinedIcon fontSize="small" />
          </S.IconButton>
        </Tooltip>
        <S.Title>{`${patient.name.split(' ')[0]} - Sessão ${format(
          new Date(data.date),
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
          <S.IconButton type="button" aria-label="Novo Anexo">
            <AttachFileOutlinedIcon fontSize="small" />
          </S.IconButton>
        </Tooltip>
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
        </S.AttachmentsList>
      </S.ContainerRecord>
    </S.Container>
  );
};

export default SessionManage;
