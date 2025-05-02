const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const cierreRutaController = require("../controllers/finalizarRuta/routeFinalizarRuta");

router.post(
  "/insertCierreRuta",
  upload.fields([
    { name: "captura_simplieroute2", maxCount: 1 },
    { name: "imagen_kilometraje2", maxCount: 1 }
  ]),
  cierreRutaController.insertCierreRuta
);

module.exports = router;
