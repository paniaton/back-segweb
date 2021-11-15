
const findAllUsers = `SELECT id, nombre, mail nombre FROM saw_db.usuario`;
const findOneUser = `SELECT estado, motivo, fecha_modificacion FROM saw_db.usuario where mail = ?`;
const findUserSesion = `SELECT admin FROM saw_db.sesion where id = ? and token = ?`;

exports.findAllUsers = findAllUsers;
exports.findOneUser = findOneUser;
exports.findUserSesion = findUserSesion;