const repo = require("./repo_mysql")
const helpers = require("../../lib/helpers");

exports.validateUsernameFormat = async(username) => {
    return await helpers.validateUsernameFormat(username); 
}

exports.validatePassword = async (username,externalPassword) => {
    let rows = await repo.findUserPassAndType(username);
    var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
    if(helpers.matchPassword(resultArray[0].password,externalPassword)) {
        let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        let insertId = await repo.createUserSession(token, resultArray[0].admin) 
        return { session_id: insertId, token: token }

    }
}

