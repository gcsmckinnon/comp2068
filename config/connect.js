module.exports = {
  // db type/server/database
  // db: 'mongodb://dbusername:dbpassword@ds153890.mlab.com:53890/comp2068'
  db: 'mongodb://' + process.env.MLABUSER + ':' + process.env.MLABPASS + '@ds153890.mlab.com:53890/comp2068'
};