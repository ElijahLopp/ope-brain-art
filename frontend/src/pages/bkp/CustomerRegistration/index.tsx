import React from 'react';
import {useForm} from 'react-hook-form';
import {useToasts} from 'react-toast-notifications';
import api from '../../../services/api';
import './styles.css';

export default function CostomerRegistration() {
  const {addToast} = useToasts();
  const {register, handleSubmit} = useForm();
  const onSubmit = async (data: any) => {
    try {
      await api.post('patients', data);
      addToast('Paciente cadastrado com sucesso', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      addToast('Erro ao cadastrar paciente', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <fieldset>
      <p>Cadastro paciente</p>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">Nome do paciente</label>
          <br />
          <input name="nome" ref={register} />

          <br />

          <label htmlFor="rua">Endereço</label>
          <br />
          <input name="rua" ref={register} />

          <br />

          <label htmlFor="bairro">Bairro</label>
          <br />
          <input name="bairro" ref={register} />

          <br />

          <label htmlFor="cep">CEP</label>
          <br />
          <input name="cep" ref={register} />

          <br />

          <label htmlFor="numero">Número da casa</label>
          <br />
          <input name="numero" ref={register} />

          <br />

          <label htmlFor="complemento">Complemento</label>
          <br />
          <input name="complemento" ref={register} />

          <br />

          <label htmlFor="dataNascimento">Data de nascimento</label>
          <br />
          <input name="dataNascimento" ref={register} />

          <br />

          <button type="submit">Enviar</button>
        </form>
      </section>
    </fieldset>
  );
}
