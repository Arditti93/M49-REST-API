const { Sequelize } = require("sequelize")

const connection = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql'
})    

connection.authenticate()

console.log("DB is working")

module.exports = connection