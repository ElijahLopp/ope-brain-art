import React from 'react';
import {AvatarProps} from './interfaces';
import * as S from './styles';

const Avatar: React.FC<AvatarProps> = ({uri, ...res}) => {
  if (uri) {
    return <S.Avatar src={uri} {...res} />;
  }
  return (
    <S.Avatar {...res}>
      <S.PersonIcon />
    </S.Avatar>
  );
};

export default Avatar;
