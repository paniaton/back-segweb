const service = require("../../app/internal/usuario/service")

module.exports = function (app) {

    app.use('/api/v1/usuarios', async function (req, res, next) {
        let session_id = req.header('Sesion');
        let token = req.header('Token');
        if(!token) 
            res.status(400).json({message: "missing token"})
        if(!session_id) 
            res.status(400).json({message: "missing session"})
        if (!!await service.findUserSession(session_id, token)) {
            next();
        } else {
            res.status(401)
                .json({message: "sesion no autorizada"})
        }
    });

    app.get('/api/v1/usuarios', async (req, res) => { /*Middleware - ADMIN*/
        try {
            const users = await service.findAll();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });

    app.get('/api/v1/usuarios/:userId', async (req, res) => { /*Middleware - ADMIN*/
        try {
            const userId = req.params.userId
            const userState = await service.findOne(userId);
            res.status(200).json(userState);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });
}
