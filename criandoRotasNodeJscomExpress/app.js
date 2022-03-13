const express = require("express");
const app = express();

app.get("/", function (req, res) {
      res.send('Página Home');
});
app.get("/contato",  (req, res)  => {
      res.send('Página de contato');
});
app.get("/sobre-empresa",  (req, res)  => {
      res.send('Sobre a empresa');
});

app.listen(3003, () => {
      console.log("Servidor iniciado na porta 3003: http://localhost:3003");
});