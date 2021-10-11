
const findAllPubs = `SELECT p.nombre as publicacion, p.descripcion, p.fecha_creacion, u.nombre, u.mail, u.id
    FROM saw_db.publicacion p 
    JOIN saw_db.usuario u ON p.usuario_id=u.id`;

const udpatePublicacionState = `UPDATE saw_db.publicacion 
    SET estado = ? 
    WHERE id = ?`;


exports.findAllPubs = findAllPubs;
exports.udpatePublicacionState = udpatePublicacionState;