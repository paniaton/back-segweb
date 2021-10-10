const service = require("../../app/internal/usuario/service")

module.exports = function (app) {
    app.get('/usuarios', async (req, res) => { /*Middleware - ADMIN*/
        try {
            const users = await service.findAll();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });

    app.get('/usuarios/:userId', async (req, res) => { /*Middleware - ADMIN*/
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
