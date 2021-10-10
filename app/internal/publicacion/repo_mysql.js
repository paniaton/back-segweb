const db = require("../../../config/mySQLconnection")
const { findAllPubs, udpatePublicacionState } = require("./queries")
exports.findAll = async () => {
    const result = await db.query(findAllPubs);
    return result[0]
}

exports.actualizarEstadoPublicacion = async function (pubId, estado) {
    console.log(pubId)
    console.log(estado)
    await db.query(udpatePublicacionState, [estado, pubId]);
}

exports.create = async function (name, price, description) {
    await db.query("INSERT INTO products(name, price, description) VALUES (?, ?, ?)", [name, price, description]);
}
