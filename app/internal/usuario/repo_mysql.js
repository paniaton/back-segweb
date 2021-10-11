const db = require("../../../config/mySQLconnection")
const { findAllUsers, findOneUser, findUserSesion } = require("./queries")

exports.findAll = async function () {
    const results = await db.query(findAllUsers);
    return results[0];
}

exports.findOne = async function (id) {
    const results = await db.query(findOneUser, id);
    return results[0];
}

exports.findUserSession = async(session_id, token) => {
    const results = await db.query(findUserSesion,[session_id, token]);
    return results[0];
}
