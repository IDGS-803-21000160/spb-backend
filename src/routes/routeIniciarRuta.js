// routes/inicioRutaRoutes.js
const express = require("express");
const router = express.Router();
const inicioRutaController = require("../controllers/inicioruta/routeInicioruta");

router.post("/insertInicioRuta", inicioRutaController.insertInicioRuta);

module.exports = router;
