require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const filmesRoutes = require("./src/routes/filmes.Routes");

const app = express();
const PORT = 4000

app.use(cors());
app.use(express.json());

app.use ("/api", filmesRoutes);

app.get("/", (req, res) => {
    res.send("Olá, domeneghetti por aquiii");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta❤😁✌ ${PORT}`)
});
