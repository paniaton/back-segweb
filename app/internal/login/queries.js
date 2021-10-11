
const findOneUserByMail = `SELECT estado, motivo, fecha_modificacion FROM saw_db.usuario where mail = ?`;
const findOneUserById =  `SELECT * FROM saw_db.usuario where id = ?`;
const findUserPass = `SELECT password, admin FROM saw_db.usuario where mail = ?`;
const createUserSession = `INSERT INTO saw_db.sesion (token, admin) VALUES (?,?)`;

exports.findOneUserByMail = findOneUserByMail;
exports.findOneUserById = findOneUserById;
exports.findUserPass = findUserPass;
exports.createUserSession = createUserSession;