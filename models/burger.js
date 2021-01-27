const orm = require("../config/orm.js");

const burgers = {
    all: (callback) => {
        orm.all("burgers", (res) => {
            callback(res);
        });
    },

    create: (vals, callback) => {
        orm.create("burgers", vals, (res) => {
            callback(res)
        });
    },
    update: (vals, callback) => {
        orm.update("burgers", vals, (res) => {
            callback(res);
        })
    }
};


module.exports = burgers;