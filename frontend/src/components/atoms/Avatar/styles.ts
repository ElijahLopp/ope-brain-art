import {Avatar as AvatarMui} from '@material-ui/core';
import PersonIconMui from '@material-ui/icons/Person';
import styled from 'styled-components';

export const Avatar = styled(AvatarMui)`
  width: ${(props) => props.theme.spacing(11)}px;
  height: ${(props) => props.theme.spacing(11)}px;
`;
export const PersonIcon = styled(PersonIconMui)`
  width: ${(props) => props.theme.spacing(8)}px;
  height: ${(props) => props.theme.spacing(8)}px;
`;
