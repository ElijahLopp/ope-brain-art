import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useAuth} from '~/hooks/auth';
import {ISignInData} from './interfaces';
import * as S from './styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn: React.FC = () => {
  const classes = useStyles();
  const {signIn} = useAuth();
  const {register, handleSubmit, control} = useForm();
  const onSubmit = (data: ISignInData) => signIn(data);
  return (
    <S.Container>
      <S.Paper>
        <Avatar className={classes.avatar} />
        <S.Title>Login</S.Title>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            inputRef={register}
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            inputRef={register}
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Controller
                as={Checkbox}
                control={control}
                name="remember"
                color="primary"
                defaultValue={false}
              />
            }
            label="Lembrar"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/teste" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
          </Grid>
        </form>
      </S.Paper>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © BrainArt 2020
        </Typography>
      </Box>
    </S.Container>
  );
};

export default SignIn;
