module.exports = function (app, service) {
    app.get('/', (req, res) => {
        res.send('asd');
    });
    
    app.post('/login', (req, res) => {
        try {
            //const {name, price, description} = req.body;
            //await db.login(name, price, description);
            res.status(200).json({message: "product created"});
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });    

    app.post('/logout', (req, res) => {
        try {
            //const {name, price, description} = req.body;
            //await db.login(name, price, description);
            res.status(200).json({message: "product created"});
        }
        catch (err) {
            res.status(500).json({message: err.message});
        }
    });         
}
    