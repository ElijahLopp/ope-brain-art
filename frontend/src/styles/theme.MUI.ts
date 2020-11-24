import blue from '@material-ui/core/colors/blue';
import {ptBR} from '@material-ui/core/locale';
import {createMuiTheme} from '@material-ui/core/styles';

const themeMUI = createMuiTheme(
  {
    typography: {fontFamily: 'Poppins'},
    palette: {
      primary: blue,
      secondary: {
        main: '#f44336',
      },
    },
  },
  ptBR,
);

export default themeMUI;
