import {
  Avatar as AvatarMui,
  Dialog,
  DialogContent as DialogContentMui,
  DialogTitle as DialogTitleContentMui,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import ButtonUploadComponent from '~/components/atoms/ButtonUpload';

export const Container = styled.div``;
export const DialogContainer = styled(Dialog)`
  padding: 0px;
  position: relative;
`;
export const DialogContent = styled(DialogContentMui)`
  padding: 20px;
`;
export const DialogTitle = styled(DialogTitleContentMui).attrs({
  disableTypography: true,
})`
  padding: 0px;
  color: #fff;
  background: ${(props) => props.theme.palette.primary.main};
`;
export const Title = styled(Typography).attrs({
  component: 'p',
  variant: 'subtitle1',
})`
  color: #fff;
  padding: 10px;
`;
export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;
export const ButtonDelete = styled.div`
  flex: 1;
`;
export const AvatarGroup = styled.div`
  position: relative;
`;
export const ButtonUpload = styled(ButtonUploadComponent)`
  position: absolute;
  bottom: -10px;
  right: -10px;
`;
export const Avatar = styled(AvatarMui)`
  width: ${(props) => props.theme.spacing(10)}px;
  height: ${(props) => props.theme.spacing(10)}px;
`;
