const repo = require("./repo_mysql")
const helpers = require("../../lib/helpers");

exports.validateUsernameFormat = async(username) => {
    return await helpers.validateUsernameFormat(username); 
}

exports.validatePassword = async (username,externalPassword) => {
    let rows = await repo.findUserPassAndType(username);
    var user = Object.values(JSON.parse(JSON.stringify(rows)))[0]
    if(!user) return false
    let {password, nombre, id, admin } = user;
    if(helpers.matchPassword(password,externalPassword)) {
        let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        let insertId = await repo.createUserSession(token, admin) 
        return { session_id: insertId, token: token, nombre: nombre, id:id , admin:admin }

    }
}

