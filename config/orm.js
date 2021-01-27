const connection = require("./connection.js");

const orm = {

    all: function (tableInput, callback) {
        const queryString = `select * from ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    create: (table, val, callback) => {
        const queryString = `insert into ${table} (burger_name, devoured) values (?,?);`;
        connection.query(queryString, val, (err, results) => {
            if (err) throw err;
            callback(results);
        })
    },
    update: (table, vals, callback) => {
        const queryString = `update ${table} set devoured = ? where id = ?`;
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }

}
module.exports = orm;