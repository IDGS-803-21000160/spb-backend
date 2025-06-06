const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/operador", userController.getOperadores);
router.get(
  "/rutasCompartidas/:id_ruta",
  userController.getRutaOperadoresByRutaId
);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

module.exports = router;
