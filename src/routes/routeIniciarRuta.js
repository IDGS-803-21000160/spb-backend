const express = require("express");
const router = express.Router();
const InicioRuta = require("../controllers/inicioruta/routeInicioruta");

router.post("/insertInicioRuta", InicioRuta.createInicioRuta);

module.exports = router;
