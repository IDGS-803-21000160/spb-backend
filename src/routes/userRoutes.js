const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/registroNewUser", userController.createNuevoUsuario);
router.get("/datosPersonales", userController.getUsuariosDatosPersonales);
router.get("/operador", userController.getOperadores);
router.get(
  "/rutasCompartidas/:id_ruta",
  userController.getRutaOperadoresByRutaId
);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

module.exports = router;
