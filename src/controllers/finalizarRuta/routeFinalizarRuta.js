const {
  insertarCierreRuta,
} = require("../../models/modelFinRuta/routesFinalizaRuta");

const finalizarRutaController = async (req, res) => {
  const {
    idRutaOperador,
    capturaSimplieroute2,
    lpsExitosos,
    lpsFallidos,
    remisionesFinales,
    fechaCierre,
    kilometrajeFinal,
    imagenKilometraje,
    visitados,
    cancelados,
  } = req.body;

  if (
    !idRutaOperador ||
    !fechaCierre ||
    !kilometrajeFinal ||
    !imagenKilometraje
  ) {
    return res.status(400).json({
      error: "Faltan datos obligatorios en la solicitud.",
    });
  }

  try {
    const result = await insertarCierreRuta({
      idRutaOperador,
      capturaSimplieroute2,
      lpsExitosos,
      lpsFallidos,
      remisionesFinales,
      fechaCierre,
      kilometrajeFinal,
      imagenKilometraje,
      visitados,
      cancelados,
    });

    return res.status(200).json({
      message: "Ruta finalizada exitosamente.",
      data: result,
    });
  } catch (error) {
    console.error("Error al finalizar la ruta:", error);
    return res.status(500).json({
      error: "Ocurrió un error al finalizar la ruta.",
    });
  }
};

module.exports = { finalizarRutaController };
