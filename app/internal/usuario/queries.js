
const findAllUsers = `SELECT id, nombre, mail nombre FROM saw_db.usuario`;

const findOneUser = `SELECT estado, motivo, fecha_modificacion FROM saw_db.usuario where id = ?`;


exports.findAllUsers = findAllUsers;
exports.findOneUser = findOneUser;