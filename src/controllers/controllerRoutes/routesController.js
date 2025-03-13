const routesModel = require("../../models/modelRoutes/routesModel");

const getAllRoutes = async (req, res) => {
  const { date, userId } = req.params;
  try {
    const routes = await routesModel.getRoutesByDateAndUser(date, userId);
    res.json(routes);
  } catch (error) {
    console.error("Error al obtener rutas:", error);
    res.status(500).json({ message: "Error al obtener rutas" });
  }
};

module.exports = { getAllRoutes };
