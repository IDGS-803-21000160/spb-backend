const express = require("express");
const router = express.Router();
const routeRegistrationController = require("../controllers/controllerRegistration/routeReguistrationController");

router.post(
  "/insertRouteUnit",
  routeRegistrationController.insertMultipleRoutes
);

router.post("/agregarRuta", routeRegistrationController.insertarRutas);

module.exports = router;
