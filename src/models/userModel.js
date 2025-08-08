const pool = require("../config/db");
const { get } = require("../routes/routesRoutes");

const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM Usuario");
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM Usuario WHERE id_persona = ?",
    [id]
  );
  return rows[0];
};

const getOperadores = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Persona WHERE tipo= 'Operador' OR tipo = 'EncargadoCR' "
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener operadores:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el controlador
  }
};

const getRutaOperadoresByRutaId = async (id_ruta) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Ruta_Operador WHERE id_ruta = ? ORDER BY id_ruta_operador ASC",
      [id_ruta]
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener Ruta_Operador por id_ruta:", error);
    throw error;
  }
};

const getUsuariosDatosPersonales = async () => {
  try {
    const [rows] = await pool.query(
      "CALL sp_lista_usuarios_datos_personales()"
    );
    // El resultado de un CALL es un array de arrays, el primero contiene los datos
    return rows[0];
  } catch (error) {
    console.error("Error al obtener datos personales de usuarios:", error);
    throw error;
  }
};

const createNuevoUsuario = async ({
  nombre,
  curp,
  domicilio,
  numero_telefonico,
  tipo,
  id_unico,
  id_cr,
  usuario,
  contrasena,
}) => {
  try {
    const [result] = await pool.query(
      "CALL sp_alta_nuevo_usuario(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nombre,
        curp,
        domicilio,
        numero_telefonico,
        tipo,
        id_unico,
        id_cr,
        usuario,
        contrasena,
      ]
    );
    return result;
  } catch (error) {
    console.error("Error al crear nuevo usuario:", error);
    throw error;
  }
};

module.exports = {
  getUsers,
  getUserById,
  getOperadores,
  getRutaOperadoresByRutaId,
  getUsuariosDatosPersonales,
  createNuevoUsuario,
};
