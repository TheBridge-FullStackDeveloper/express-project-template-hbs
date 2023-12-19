const multer = require('multer'); // Sin esta linea no podemos subir archivos al servidor

const storage = new multer.memoryStorage();
const upload = multer({
  storage,
});

module.exports = upload;
