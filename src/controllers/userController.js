const UserModel = require("../models/userModel");
const { get } = require("../routes/routesRoutes");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario" });
  }
};

const getOperadores = async (req, res) => {
  try {
    const operadores = await UserModel.getOperadores();
    res.json(operadores);
  } catch (error) {
    console.error("Error al obtener operadores:", error);
    res.status(500).json({ message: "Error al obtener operadores" });
  }
};

const getRutaOperadoresByRutaId = async (req, res) => {
  try {
    const rutaOperadores = await UserModel.getRutaOperadoresByRutaId(
      req.params.id_ruta
    );
    res.json(rutaOperadores);
  } catch (error) {
    console.error("Error al obtener Ruta_Operador por id_ruta:", error);
    res
      .status(500)
      .json({ message: "Error al obtener Ruta_Operador por id_ruta" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getOperadores,
  getRutaOperadoresByRutaId,
};
