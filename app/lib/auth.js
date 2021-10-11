const service = require("../internal/usuario/service");

const auth = {};

    auth.isLoggedIn = async (req, res, next) => {
        let session_id = req.header('Sesion');
        let token = req.header('Token');
        if(!token) 
            res.status(401)
            .json({message: "sesion no autorizada"})
        if(!session_id) 
            res.status(401)
            .json({message: "sesion no autorizada"})
        if (!!await service.findUserSession(session_id, token)) {
            next();
        } else {
            res.status(401)
                .json({message: "sesion no autorizada"})
        }
    }


module.exports = auth;