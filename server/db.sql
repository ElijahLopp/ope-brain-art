CREATE DATABASE brainart;

CREATE TABLE paciente(
  codPaciente SERIAL PRIMARY KEY,
  nomePaciente VARCHAR(100) NOT NULL,
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(80) NOT NULL,
  cep CHAR(9) NOT NULL,
  numCasa SMALLINT NOT NULL,
  complemento CHAR(1),
  dataNasc DATE NOT NULL,
  foto BYTEA,
  nomePai VARCHAR(100),
  nomeMae VARCHAR(100),
  rgPaciente CHAR(14) NOT NULL,
  cpfPaciente CHAR(14) NOT NULL
);

CREATE TABLE email(
  codPaciente INT,
  email VARCHAR(80) NOT NULL,
  CONSTRAINT fk_codPaciente FOREIGN KEY(codPaciente) REFERENCES paciente(codPaciente),
  PRIMARY KEY (codPaciente, email)
);

CREATE TABLE telefone(
  codPaciente INT,
  telefone VARCHAR(15) NOT NULL,
  CONSTRAINT fk_codPaciente FOREIGN KEY(codPaciente) REFERENCES paciente(codPaciente),
  PRIMARY KEY (codPaciente, telefone)
);
