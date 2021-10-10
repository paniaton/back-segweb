const repo = require("./repo_mysql")

exports.findAll = async (param) => {
    return repo.findAll(param)
}

exports.actualizarEstadoPublicacion = async (pubId,estado) => {
    return repo.actualizarEstadoPublicacion(pubId,estado)
}
