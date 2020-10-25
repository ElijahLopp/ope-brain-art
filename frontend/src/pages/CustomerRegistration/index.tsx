import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import api from "../../services/api";
import "./style.css";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function CostomerRegistration() {
  const { addToast } = useToasts();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      await api.post("patients", data);
      addToast("Paciente cadastrado com sucesso", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      addToast("Erro ao cadastrar paciente", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="regform"><h1>Cadastro de Paciente</h1></div>
        <div className="form-box">
          <form onSubmit={handleSubmit(onSubmit)} className="form-style">
            
            <section id="nome">
              <label className="nome" htmlFor="nome">Nome: </label>
              <input name="nome" ref={register} required/>
              <label htmlFor="birth-date">Data de Nasc.: </label>
              <input type="date" name="birth-date" ref={register} required />
            </section>

            <br />

              <section id="documentos">
              <label htmlFor="rg">RG: </label>
              <input type="text" name="rg" autoComplete="off" required />
              <label htmlFor="cpf">CPF: </label>
              <input type="text" name="cpf" autoComplete="off" required />
            </section>

            <br />

            <section id="contato">
              <label htmlFor="phone">Contato: </label>
              <input type="phone" name="phone" autoComplete="off" required />
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" autoComplete="off" required />
            </section>

            <br/>
            <section id="endereco">
              <label htmlFor="cep">CEP: </label>
              <input name="cep" ref={register} required/>

              <br />

              <label htmlFor="rua">Rua: </label>
              <input name="rua" ref={register} required/>

              <label htmlFor="numero">Nº: </label>
              <input name="numero" ref={register} required/>

              <br />
              <label htmlFor="bairro">Bairro: </label>
              <input name="bairro" ref={register} />

              <label htmlFor="complemento">Complemento: </label>
              <input name="complemento" ref={register} />
            </section>

            <br />

            <section id="responsaveis">
              <label htmlFor="name-mot">Nome da Mãe: </label>
              <input type="text" name="name-mot" autoComplete="off" />
              <label htmlFor="name-fat">Nome da Pai: </label>
              <input type="text" name="name-fat" autoComplete="off" />
            </section>
            

            <label htmlFor="avatar">Escolha uma imagem:</label>
            <input type="file" name="avatar" accept="image/x-png, image/jpeg" />

            <br />

            <div className="botao"><button type="submit">Enviar</button></div>
          </form>
        </div>
      <Footer />
    </div>
  );
}
