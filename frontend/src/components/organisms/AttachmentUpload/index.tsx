import {Button, DialogActions, TextField, useTheme} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import React from 'react';
import {useForm} from 'react-hook-form';
import InputUpload from '~/components/atoms/InputUpload';
import Loading from '~/components/atoms/Loading';
import useSessionContext from '~/hooks/session/useSessionContext';
import {AttachmentUploadProps} from './interfaces';
import * as S from './styles';

const AttachmentUpload: React.FC<AttachmentUploadProps> = ({open, onClose}) => {
  const {register, handleSubmit, reset} = useForm();
  const {addAttachment, loadingAttachment} = useSessionContext();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    onClose();
    reset({} as any);
  };

  const onSubmit = async (data: any) => {
    if (open) {
      await addAttachment(open, data);
      onClose();
    }
  };

  return (
    <>
      <S.DialogContainer
        fullWidth={fullScreen}
        open={!!open}
        aria-labelledby="form-dialog-title">
        <Loading active={loadingAttachment} />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <S.DialogTitle id="form-dialog-title">
            <AttachFileOutlinedIcon fontSize="small" />
            <S.Title>Upload Arquivos</S.Title>
          </S.DialogTitle>
          <S.DialogContent>
            <TextField
              autoFocus
              inputRef={register}
              name="nome"
              margin="dense"
              label="Nome do Arquivo"
              type="text"
              fullWidth
            />
            <InputUpload register={register} />
          </S.DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button type="submit" color="primary">
              Upload
            </Button>
          </DialogActions>
        </form>
      </S.DialogContainer>
    </>
  );
};

export default AttachmentUpload;
