const express = require("express");
const router = express.Router();
const routeRegistrationController = require("../controllers/controllerRegistration/routeReguistrationController");

router.put("/cambiarEstadoRuta", routeRegistrationController.changeRutaEstado);

router.post(
  "/insertRouteUnit",
  routeRegistrationController.insertMultipleRoutes
);
router.post("/agregarRuta", routeRegistrationController.insertarRutas);
router.post(
  "/convertirRutaCompartida",
  routeRegistrationController.convertToSharedRoute
);

module.exports = router;
