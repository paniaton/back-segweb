const service = require("../../app/internal/usuario/service")
const auth = require("../lib/auth")

module.exports = function (app) {

    app.use('/api/v1/usuarios', async (req, res, next) => auth.isAdmin(req, res, next));

    app.get('/api/v1/usuarios', async (req, res) => { 
        try {
            const users = await service.findAll();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });

    app.get('/api/v1/usuarios', async (req, res) => {
        try {
            const userId = req.query.mail
            const userState = await service.findOne(userId);
            res.status(200).json(userState);
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });
}
