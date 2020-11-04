import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React, {useCallback} from 'react';
import {ButtonUploadProps} from './interfaces';
import * as S from './styles';

const ButtonUpload: React.FC<ButtonUploadProps> = ({
  onChange,
  register,
  ...res
}) => {
  const handleChangePreview = useCallback(
    (event) => {
      const file = URL.createObjectURL(event.target.files[0]);
      onChange(file);
    },
    [onChange],
  );
  return (
    <S.Container {...res}>
      <label>
        <S.Input
          accept="image/*"
          name="file"
          ref={register && register}
          id="icon-button-file"
          type="file"
          onChange={handleChangePreview}
        />
        <IconButton
          color="inherit"
          aria-label="upload picture"
          component="span">
          <PhotoCamera fontSize="small" />
        </IconButton>
      </label>
    </S.Container>
  );
};

export default ButtonUpload;
