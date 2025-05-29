const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const field = file.fieldname;
    const folder = field === "captura_simplieroute" ? "uploads/simple" : "uploads/kilometros";

    // Asegurarse que el folder exista
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },
  filename: function (req, file, cb) {
    const operadorId = req.body.id_ruta_operador || "noid";
    const prefix = file.fieldname === "captura_simplieroute" ? "simple" : "km";
    const filename = `${operadorId}_${prefix}_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
