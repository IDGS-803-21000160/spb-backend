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
    if (user) {
      userDetails = await UserModel.getOperatorDetails(user.id_persona);
    } else {
      return res
        .status(500)
        .json({ message: "No se encontraron detalles del usuario" });
    }

    if (!userDetails) {
      return res
        .status(500)
        .json({ message: "No se encontraron detalles del usuario" });
    }

    // Devolver los datos del usuario autenticado
    res.json({
      id_usuario: user.id_usuario,
      cr: user.id_cr,
      detalles: userDetails,
    });
  } catch (error) {
    console.error('❌ ERROR EN LOGIN:', error); // ESTE ES CLAVE
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { login };
