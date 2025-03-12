const pool = require("../config/db");

const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM usuarios");
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

module.exports = { getUsers, getUserById };
