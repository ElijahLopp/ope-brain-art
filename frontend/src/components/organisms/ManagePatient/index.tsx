import {
  Box,
  Button,
  DialogActions,
  Paper,
  Tab,
  Tabs,
  TextField,
  useTheme,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {KeyboardDatePicker} from '@material-ui/pickers';
import React, {useCallback, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SwipeableViews from 'react-swipeable-views';
import Avatar from '~/components/atoms/Avatar';
import Loading from '~/components/atoms/Loading';
import {uriAvatar} from '~/helpers/patient';
import {PatientData} from '~/hooks/patient/interfaces';
import usePatientContext from '~/hooks/patient/usePatientContext';
import {ManagePatientProps} from './interfaces';
import * as S from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
const TabPanel: React.FC<TabPanelProps> = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      <Box p={3} pt={1}>
        {children}
      </Box>
    </div>
  );
};

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ManagePatient: React.FC<ManagePatientProps> = ({open, onClose}) => {
  const [avatarPreview, setAvatarPreview] = React.useState(
    uriAvatar(open?.avatar || null),
  );
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedTab, setSelectedTab] = React.useState(0);
  const isEdit = !!(typeof open === 'object' && open?.id);

  const {register, handleSubmit, reset, control} = useForm();
  const {createPatient, updatePatient, loadingManage} = usePatientContext();
  useEffect(() => {
    if (isEdit) {
      const result: any = open;
      reset(result);
    } else {
      reset({dataNascimento: null} as any);
    }
  }, [isEdit, reset, open]);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setSelectedTab(index);
  };

  const handleClose = () => {
    onClose();
    setAvatarPreview(null);
    reset({dataNascimento: null} as any);
  };

  const handleChangePreview = useCallback((file) => {
    setAvatarPreview(file);
  }, []);

  const onSubmit = async (data: PatientData) => {
    try {
      if (isEdit) {
        open?.id && (await updatePatient(open.id, data));
      } else {
        await createPatient(data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <S.DialogContainer
        fullWidth={fullScreen}
        open={!!open}
        aria-labelledby="form-dialog-title">
        <Loading active={loadingManage} />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <S.DialogTitle id="form-dialog-title">
            <S.Title>{isEdit ? 'Editar Paciente' : 'Novo Paciente'}</S.Title>
            <S.AvatarContainer>
              <S.AvatarGroup>
                <Avatar
                  uri={avatarPreview || uriAvatar(open?.avatar || null)}
                />
                <S.ButtonUpload
                  register={register}
                  onChange={handleChangePreview}
                />
              </S.AvatarGroup>
            </S.AvatarContainer>
            <Paper square>
              <Tabs
                value={selectedTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                variant="fullWidth">
                <Tab label="Dados" {...a11yProps(0)} />
                <Tab label="Endereço" {...a11yProps(1)} />
              </Tabs>
            </Paper>
          </S.DialogTitle>
          <S.DialogContent>
            <SwipeableViews
              axis="x"
              index={selectedTab}
              onChangeIndex={handleChangeIndex}>
              <TabPanel value={selectedTab} index={0} dir={theme.direction}>
                <TextField
                  autoFocus
                  inputRef={register}
                  name="nome"
                  margin="dense"
                  label="Nome do paciente"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="rg"
                  inputRef={register}
                  margin="dense"
                  label="RG"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="cpf"
                  inputRef={register}
                  margin="dense"
                  label="CPF"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="email"
                  inputRef={register}
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <TextField
                  name="telefone"
                  inputRef={register}
                  margin="dense"
                  label="Telefone"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="celular"
                  inputRef={register}
                  margin="dense"
                  label="Celular"
                  type="text"
                  fullWidth
                />
                <Controller
                  control={control}
                  name="dataNascimento"
                  render={({onChange, value, name}) => (
                    <KeyboardDatePicker
                      disableToolbar
                      fullWidth
                      autoOk
                      variant="inline"
                      format="dd/MM/yyyy"
                      label="Data de Nascimento"
                      invalidDateMessage="Formato da data é invalida"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />

                <TextField
                  name="nomeMae"
                  inputRef={register}
                  margin="dense"
                  label="Nome do Mãe"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="nomePai"
                  inputRef={register}
                  margin="dense"
                  label="Nome do Pai"
                  type="text"
                  fullWidth
                />
              </TabPanel>
              <TabPanel value={selectedTab} index={1} dir={theme.direction}>
                <TextField
                  name="cep"
                  inputRef={register}
                  margin="dense"
                  label="CEP"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="rua"
                  inputRef={register}
                  margin="dense"
                  label="Rua"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="numero"
                  inputRef={register}
                  margin="dense"
                  label="Numero"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="bairro"
                  inputRef={register}
                  margin="dense"
                  label="Bairro"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="complemento"
                  inputRef={register}
                  margin="dense"
                  label="Complemento"
                  type="text"
                  fullWidth
                />
              </TabPanel>
            </SwipeableViews>
          </S.DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button type="submit" color="primary">
              Salvar
            </Button>
          </DialogActions>
        </form>
      </S.DialogContainer>
    </div>
  );
};

export default ManagePatient;
