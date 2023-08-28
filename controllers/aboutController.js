const express = require("express");
const router = express.Router();

// Sobre
router.get("/about", (req, res) => {
    res.status(200).json("Nome dos integrantes do grupo - Leandro Moreira da Silva, Leon Wagner Farias de Souza, Jonas Lima de Amorim, Junia Almeida Matos Boechat, Samara Luiza da Silva");
});

module.exports = router;
