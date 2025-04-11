const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const inicioRutaController = require("../controllers/inicioruta/routeInicioruta");

router.post(
  "/insertInicioRuta",
  upload.fields([
    { name: "captura_simplieroute", maxCount: 1 },
    { name: "imagen_kilometraje", maxCount: 1 },
  ]),
  inicioRutaController.insertInicioRuta
);

module.exports = router;
