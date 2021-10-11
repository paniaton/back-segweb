const repo = require("./repo_mysql")

exports.findAll = async () => {
    return repo.findAll()
}

exports.findOne = async (userId) => {
    return repo.findOne(userId)
}

exports.findUserSession = async(session_id, token) => {
    const rows = await repo.findUserSession(session_id, token); 
    var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
    return resultArray[0].admin == 0
}
