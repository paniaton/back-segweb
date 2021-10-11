const db = require("../../../config/mySQLconnection")
const { findOneUserByMail,findUserPass, createUserSession } = require("./queries")

exports.findOneByMail = async function (mail) {
    const result = await db.query(findOneUserByMail, mail);
    return result[0];
}

exports.findUserPassAndType = async function (mail) {
    const result = await db.query(findUserPass, mail);
    return result[0];
}

exports.createUserSession = async function (token,admin) {
    const result = await db.query(createUserSession, [token, admin])
    return result[0].insertId;
}