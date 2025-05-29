const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const cierreRutaController = require("../controllers/finalizarRuta/routeFinalizarRuta");

router.post("/insertCierreRuta", cierreRutaController.finalizarRutaController);

module.exports = router;
