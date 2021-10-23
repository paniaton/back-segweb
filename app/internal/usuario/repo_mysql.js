const db = require("../../../config/mySQLconnection")
const { findAllUsers, findOneUser, findUserSesion } = require("./queries")

exports.findAll = async function () {
    const results = await db.query(findAllUsers);
    return results[0];
}

exports.findOne = async function (id) {
    console.log(id)
    const results = await db.query('SELECT estado, motivo, fecha_modificacion FROM saw_db.usuario where id = ' + id)
    console.log(results)
    return results[0];
}

exports.findUserSession = async(session_id, token) => {
    const results = await db.query(findUserSesion,[session_id, token]);
    return results[0];
}

