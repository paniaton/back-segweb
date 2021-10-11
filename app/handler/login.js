const service = require('../internal/login/service'); 
module.exports = function (app) {

    /*******Routes*******/
    app.get('/', (req, res) => {
        res.send('asd');
    });
    
    app.post('/login',  async (req, res) => {
        try {
            console.log("LOGIN")
            let {username, password} = req.body
            if (!username) 
                res.status(404).json({message: "missing username"});
            if (!password) 
                res.status(404).json({message: "missing password"});

            if(!service.validateUsernameFormat(username)) {
                res.status(404).json({message: "username does not meet the required format"});
            }

            const value = await service.validatePassword(username,password);
            if(!!value) {
                res.status(200).json(value);
            } else {
                res.status(404).json({message: "invalidad username or password"}); 
            }

        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });    

    app.post('/logout', (req, res) => {
        try {
            //req.logOut();
            res.redirect('/login');
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });         
}
    