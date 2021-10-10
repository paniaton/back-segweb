const db = require("../../../config/mySQLconnection")
const { findAllUsers, findOneUser } = require("./queries")

exports.findAll = async function () {
    const results = await db.query(findAllUsers);
    return results[0];
}

exports.findOne = async function (id) {
    console.log(id)
    const result = await db.query(findOneUser, id);
    console.log(result)
    return result[0];
}

