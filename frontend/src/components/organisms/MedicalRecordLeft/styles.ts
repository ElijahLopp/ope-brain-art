import DividerMUI from '@material-ui/core/Divider';
import IconButtonMUI from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  min-width: 440px;
  border-right: 1px solid #ccc;
`;

export const Header = styled.div`
  padding: 8px 4px;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const InputSearch = styled(InputBase)`
  margin-left: 4px;
  flex: 1;
`;
export const Divider = styled(DividerMUI)`
  height: 28px;
  margin: 4px;
`;
export const IconButton = styled(IconButtonMUI)``;

export const ListaPatient = styled.div`
  flex: 1;
`;
export const PaginationContainer = styled.div`
  border-top: 1px solid #ccc;
  align-items: center;
`;
