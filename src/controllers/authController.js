const UserModel = require("../models/authModel");

const login = async (req, res) => {
  const { usuario, contrasena } = req.body;

  console.log("usuario", usuario);

  try {
    // Buscar usuario en la base de datos
    const user = await UserModel.getUserByUsername(usuario, contrasena);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    // Obtener detalles del operador o encargado
    let userDetails = null;
    if (user.tipo_usuario === "operador") {
      userDetails = await UserModel.getOperatorDetails(user.id);
    } else if (user.tipo_usuario === "encargado_cr") {
      userDetails = await UserModel.getEncargadoDetails(user.id);
    }

    if (!userDetails) {
      return res
        .status(500)
        .json({ message: "No se encontraron detalles del usuario" });
    }

    // Devolver los datos del usuario autenticado
    res.json({
      usuario: user.usuario,
      tipo_usuario: user.tipo_usuario,
      detalles: userDetails,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al autenticar usuario", error: error.message });
  }
};

module.exports = { login };
