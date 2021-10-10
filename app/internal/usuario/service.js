const repo = require("./repo_mysql")

exports.findAll = async () => {
    return repo.findAll()
}

exports.findOne = async (userId) => {
    return repo.findOne(userId)
}
