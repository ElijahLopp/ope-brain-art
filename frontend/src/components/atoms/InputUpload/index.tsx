import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, {useCallback, useState} from 'react';
import {ButtonUploadProps} from './interfaces';
import * as S from './styles';

const InputUpload: React.FC<ButtonUploadProps> = ({register, ...res}) => {
  const [nameFile, setNameFile] = useState('');
  const handleChangePreview = useCallback((event) => {
    setNameFile(event.target.files[0].name);
  }, []);
  return (
    <S.Container {...res}>
      <label htmlFor="icon-button-file">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField
              aria-readonly
              required
              inputProps={{readOnly: true}}
              value={nameFile}
            />
          </Grid>
          <Grid item>
            <S.Input
              name="file"
              ref={register && register}
              id="icon-button-file"
              type="file"
              required
              onChange={handleChangePreview}
            />
            <Button variant="contained" color="primary" component="span">
              Escolher arquivo
            </Button>
          </Grid>
        </Grid>
      </label>
    </S.Container>
  );
};

export default InputUpload;
