
const findAllPubs = `SELECT p.id as pub_id, p.nombre as publicacion, p.descripcion, p.fecha_creacion, p.estado, u.nombre, u.mail, u.id as user_id
    FROM saw_db.publicacion p 
    JOIN saw_db.usuario u ON p.usuario_id=u.id`;

const udpatePublicacionState = `UPDATE saw_db.publicacion 
    SET estado = ? 
    WHERE id = ?`;

const createPublicacion = `INSERT INTO saw_db.publicacion (nombre, descripcion, usuario_id) VALUES (?,?,?)`;


exports.findAllPubs = findAllPubs;
exports.udpatePublicacionState = udpatePublicacionState;
exports.createPublicacion = createPublicacion;