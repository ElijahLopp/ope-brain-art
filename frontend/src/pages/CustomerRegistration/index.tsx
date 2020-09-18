import React from "react";

import { useForm } from "react-hook-form";

import "./styles.css";

export default function CostomerRegistration() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <fieldset>
      <p>Cadastro paciente</p>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nomePaciente">Nome do paciente</label>
          <br />
          <input name="nomePaciente" ref={register} />

          <br />

          <label htmlFor="ruaPaciente">Endereço</label>
          <br />
          <input name="ruaPaciente" ref={register} />

          <br />

          <label htmlFor="bairroPaciente">Bairro</label>
          <br />
          <input name="bairroPaciente" ref={register} />

          <br />

          <label htmlFor="cepPaciente">CEP</label>
          <br />
          <input name="cepPaciente" ref={register} />

          <br />

          <label htmlFor="numCellPaciente">Número da casa</label>
          <br />
          <input name="numCellPaciente" ref={register} />

          <br />

          <label htmlFor="complementoPaciente">Complemento</label>
          <br />
          <input name="complementoPaciente" ref={register} />

          <br />

          <label htmlFor="dataNascimentoPaciente">Data de nascimento</label>
          <br />
          <input name="dataNascimentoPaciente" ref={register} />

          <br />

          <button type="submit">Enviar</button>
        </form>
      </section>
    </fieldset>
  );
}
