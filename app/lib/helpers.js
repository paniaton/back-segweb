const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

helpers.matchPassword = (password, savedPassword) => {
  try {
    return password == savedPassword
    //return await bcrypt.compare(password, savedPassword);
  } catch (e) {
    console.log(e)
  }
};

helpers.validateUsernameFormat = async (email) => {
  try {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  } catch (e) {
    console.log(e)
  }
};


module.exports = helpers;