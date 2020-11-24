import {
  Button,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {KeyboardDateTimePicker} from '@material-ui/pickers';
import React, {ChangeEvent, useCallback, useEffect, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import Loading from '~/components/atoms/Loading';
import usePatientContext from '~/hooks/patient/usePatientContext';
import useScheduleContext from '~/hooks/schedule/useScheduleContext';
import {ManageScheduleProps} from './interfaces';
import * as S from './styles';

const ManageSchedule: React.FC<ManageScheduleProps> = ({open, onClose}) => {
  const theme = useTheme();
  const {createSchedule, updateSchedule, loadingManage} = useScheduleContext();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [openAuto, setOpenAuto] = React.useState(false);
  const [options, setOptions] = React.useState<any[]>([]);
  const [value, setValue] = React.useState<any>(null);
  const isEdit = !!(typeof open === 'object' && open?.id);
  const loading = openAuto && options.length === 0;

  const timeRef = useRef<number>();

  const {register, handleSubmit, reset, control} = useForm();
  const {searchPatient} = usePatientContext();
  useEffect(() => {
    if (isEdit) {
      const result: any = open;
      setValue(result.patient);
      reset(result);
    } else {
      setValue(null);
      reset({start: open?.start, end: open?.end, status: 1} as any);
    }
  }, [isEdit, reset, open]);

  const handleClose = () => {
    reset({start: null, end: null} as any);
    setValue(null);
    setOptions([]);
    onClose();
  };

  const onSubmit = async (data: any) => {
    const dateCreate = {
      ...data,
      patient: value,
    };
    if (isEdit) {
      open?.id && (await updateSchedule(open.id, dateCreate));
    } else {
      await createSchedule(dateCreate);
    }
    onClose();
  };

  const handleOnSearch = useCallback(
    async (e: ChangeEvent<{}>, newInputValue: string) => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      const has = options.find((o) => o.nome === newInputValue);
      timeRef.current = await setTimeout(async () => {
        if (!has && newInputValue !== '') {
          const result = await searchPatient(newInputValue);
          setOptions(result);
        }
      }, 500);
    },
    [searchPatient, options],
  );

  return (
    <div>
      <S.DialogContainer
        fullWidth={fullScreen}
        open={!!open}
        aria-labelledby="form-dialog-title">
        <Loading active={loadingManage} />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <S.DialogTitle id="form-dialog-title">
            <S.Title>
              {isEdit ? 'Editar Agendamento' : 'Novo Agendamento'}
            </S.Title>
          </S.DialogTitle>
          <S.DialogContent>
            <Autocomplete
              open={openAuto}
              onOpen={() => {
                setOpenAuto(true);
              }}
              onClose={() => {
                setOpenAuto(false);
              }}
              onChange={(event: any, newValue: any) => {
                setValue(newValue);
              }}
              value={value}
              getOptionSelected={(option, value) => option.nome === value.nome}
              getOptionLabel={(option) => option.nome}
              options={options}
              loading={loading}
              onInputChange={handleOnSearch}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Paciente"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="start"
              render={({onChange, value, name}) => (
                <KeyboardDateTimePicker
                  fullWidth
                  autoOk
                  variant="inline"
                  format="dd/MM/yyyy HH:mm"
                  label="Inicio"
                  ampm={false}
                  invalidDateMessage="Formato da data é invalida"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="end"
              render={({onChange, value, name}) => (
                <KeyboardDateTimePicker
                  fullWidth
                  autoOk
                  variant="inline"
                  format="dd/MM/yyyy HH:mm"
                  label="Termino"
                  ampm={false}
                  invalidDateMessage="Formato da data é invalida"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Controller
                render={({onChange, value, name}) => (
                  <Select
                    value={value}
                    onChange={onChange}
                    fullWidth
                    labelId="status-label"
                    id="status-select"
                    name={name}>
                    <MenuItem value={1}>aguadando</MenuItem>
                    <MenuItem value={3}>cancelado</MenuItem>
                    <MenuItem value={2}>concluido</MenuItem>
                  </Select>
                )}
                name="status"
                control={control}
                defaultValue=""
              />
            </FormControl>
            <TextField
              name="valorConsulta"
              inputRef={register}
              margin="dense"
              label="Valor da consulta"
              type="text"
              fullWidth
            />
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

export default ManageSchedule;
