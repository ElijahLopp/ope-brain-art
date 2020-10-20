// REQUIRES
const express = require("express");
const cors = require("cors");
const pool = require("./connec")


let { Client } = require('pg');

// APP
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
// cadastro de paciente
// app.post("/cadastro", async(req, res) => {
//   try {
//     const { nomepaciente } = req.body;
//     const cadastro = await pool.query(`INSERT INTO paciente (nomepaciente) VALUES (${nomepaciente})`);

//     console.log(cadastro);
//   } catch (err) {
//     console.error(err.message);
//   }
// })

app.get("/cadastro", async(req, res) => {
  try {
    pool.connect()
  } catch (err) {
    console.log(err);
  }
})

app.listen(5000, () => {
  console.log("The server has started on port 5000");
})
