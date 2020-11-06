import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Avatar from '~/components/atoms/Avatar';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  cursor: pointer;
  :nth-child(odd) {
    background: #f9f9f9;
  }
  :hover {
    background: #e6e6e6;
  }
`;
export const AvatarContainer = styled(Avatar)`
  width: 60px;
  height: 60px;
`;
export const Content = styled.div`
  flex: 1;
  padding-left: 8px;
`;
export const Name = styled(Typography).attrs({
  component: 'p',
  variant: 'subtitle1',
})``;
export const Description = styled(Typography).attrs({
  component: 'p',
  variant: 'inherit',
  color: 'textSecondary',
})``;
