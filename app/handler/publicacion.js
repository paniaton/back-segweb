const service = require("../../app/internal/publicacion/service")

module.exports = function (app) {
    app.get('/publicaciones', async (req, res) => {
        try {
            let answer = await service.findAll()
            res.status(200).json(answer);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });

    app.post('/publicaciones/:publicacionId/cambiarEstado',  async (req, res) => { /*Middleware - ADMIN*/
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
