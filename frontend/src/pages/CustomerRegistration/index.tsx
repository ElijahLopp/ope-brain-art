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
        <div className="form-box">
          <h1 className="form-title">Cadastro de Paciente</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form-style">
            <label htmlFor="nome">Nome do paciente: </label>
            <input name="nome" ref={register} />

            <br />

            <label htmlFor="birth-date">Data de Nascimento: </label>
            <input type="date" name="birth-date" ref={register} />

            <br />

            <label htmlFor="rg">RG: </label>
            <input type="text" name="rg" autoComplete="off" required />

            <label htmlFor="cpf">CPF: </label>
            <input type="text" name="cpf" autoComplete="off" required />

            <br />

            <label htmlFor="phone">Contato: </label>
            <input type="phone" name="phone" autoComplete="off" required placeholder="(00) 99999-999" />

            <br />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" autoComplete="off" required />

            <br/>
            <label htmlFor="cep">CEP: </label>
            <input name="cep" ref={register} />

            <br />

            <label htmlFor="rua">Rua: </label>
            <input name="rua" ref={register} />

            <label htmlFor="numero">Nº: </label>
            <input name="numero" ref={register} />

            <br />

            <label htmlFor="bairro">Bairro: </label>
            <input name="bairro" ref={register} />

            <label htmlFor="complemento">Complemento: </label>
            <input name="complemento" ref={register} />

            <br />

            <label htmlFor="name-mot">Nome da Mãe: </label>
            <input type="text" name="name-mot" autoComplete="off" />

            <br />

            <label htmlFor="name-fat">Nome da Pai: </label>
            <input type="text" name="name-fat" autoComplete="off" />

            <br />

            <label htmlFor="avatar">Escolha um imagem:</label>
            <input type="file" name="avatar" accept="image/x-png, image/jpeg" />

            <br />

            <button type="submit">Enviar</button>
          </form>
        </div>
      <Footer />
    </div>
  );
}
