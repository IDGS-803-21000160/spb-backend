const express = require("express");
const router = express.Router();
const routesRoutes = require("../controllers/controllerRoutes/routesController");

router.get("/:date/:userId", routesRoutes.getAllRoutes);

module.exports = router;
