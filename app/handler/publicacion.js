const service = require("../../app/internal/publicacion/service")
const auth = require("../lib/auth")

module.exports = function (app) {

    app.get('/api/v1/publicaciones', async (req, res) => {
        try {
            let answer = await service.findAll()
            res.status(200).json(answer);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });

    app.post('/api/v1/publicaciones', async (req, res, next) => auth.isLoggedIn(req, res, next), async (req, res) => {
        try {
            const { nombre, descripcion, usuario_id } = req.body;
            console.log(req.body)
            if(!nombre && !descripcion && !usuario_id) {
                res.status(404).json({message: "missing values, nombre, descripcion o usuario_id"});
                return
            }
            let answer = await service.createPublicacion(nombre, descripcion, usuario_id)
            res.status(200).json(answer.insertId);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });

    app.post('/api/v1/publicaciones/:publicacionId/cambiarEstado', async (req, res, next) => auth.isLoggedIn(req, res, next), async (req, res) => { /*Middleware - ADMIN*/
        try {
            const pubId = req.params.publicacionId;
            const estado = req.body.estado;
            await service.actualizarEstadoPublicacion(pubId,estado);
            res.sendStatus(200)
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });
}
