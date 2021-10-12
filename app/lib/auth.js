const service = require("../internal/usuario/service");

const auth = {};

    auth.isAdmin = async (req, res, next) => {
        let session_id = req.header('Sesion');
        let token = req.header('Token');
        if(!token) {
            res.status(401)
            .json({message: "sesion no autorizada"})
            return;
        }
        if(!session_id) {
            res.status(401)
            .json({message: "sesion no autorizada"})
            return;
        }
        const result = await service.findUserSession(session_id, token)
        if (!!result && result.admin) {
            next();
        } else {
            res.status(401)
                .json({message: "sesion no autorizada"})
        }
    }

    auth.isLoggedIn = async (req, res, next) => {
        let session_id = req.header('Sesion');
        let token = req.header('Token');
        if(!token){ 
            res.status(401)
            .json({message: "sesion no autorizada"})
            return;
        }
        if(!session_id) {
            res.status(401)
            .json({message: "sesion no autorizada"})
            return;
        }
        const result = await service.findUserSession(session_id, token)
        if (!!result) {
                next();
        } else {
            res.status(401)
                .json({message: "sesion no autorizada"})
        }
    }


module.exports = auth;