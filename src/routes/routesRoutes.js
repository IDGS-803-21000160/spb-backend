const express = require("express");
const router = express.Router();
const routeRegistrationController = require("../controllers/controllerRegistration/routeReguistrationController");

router.post(
  "/insertRouteUnit",
  routeRegistrationController.insertMultipleRoutes
);

module.exports = router;
