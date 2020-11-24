import DividerMUI from '@material-ui/core/Divider';
import IconButtonMUI from '@material-ui/core/IconButton';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  min-width: 440px;
  border-right: 1px solid #ccc;
`;

export const Content = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 8px 4px;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Divider = styled(DividerMUI)`
  height: 28px;
  margin: 4px;
`;
export const IconButton = styled(IconButtonMUI)``;

export const ListaPatient = styled.div`
  height: calc(100vh - 177px);
  overflow-y: scroll;
`;
export const PaginationContainer = styled.div`
  border-top: 1px solid #ccc;
  align-items: center;
`;
