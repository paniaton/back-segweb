const db = require("../../../config/mySQLconnection")
const { findAllPubs, udpatePublicacionState, createPublicacion } = require("./queries")
exports.findAll = async () => {
    const result = await db.query(findAllPubs);
    return result[0]
}

exports.actualizarEstadoPublicacion = async (pubId, estado) => {
    console.log(pubId)
    console.log(estado)
    await db.query(udpatePublicacionState, [estado, pubId]);
}

exports.createPublicacion = async (nombre, descripcion, usuario_id) => {
    const results = await db.query(createPublicacion,[nombre, descripcion, usuario_id]);
    return results[0];
}
