const express = require("express");
const router = express.Router();
const routesRoutes = require("../controllers/controllerRoutes/routesController");

router.get(
  "/operador/:idOperador/:fecha",
  routesRoutes.getRouteAssignedToOperator
);
router.get("/routes/:idOperador/:fecha", routesRoutes.getRouteAndCrData);
router.get("/rutes/:date/:userId", routesRoutes.getAllRoutes);
router.get("/cr/:idCr", routesRoutes.getDataFromTheCrThatAssignedRoute);

router.get("/:idRuta/:fecha", routesRoutes.getRouteInfo);

module.exports = router;
