const mongoose = require('mongoose');
const schema = require('../schemas/barrio.schema');
const db = require('../db-connection/mongodb');
db();

schema.statics = {
    create: function (data, cb) {
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query, cb) {
        this.find(query, cb)
    },
    getByCode: function (query, cb) {
        this.find(query, cb)
    },
    update: function (query, data, cb) {
        this.findOneAndUpdate(query, { $set: data }, { new: true }, cb)
    },
    delete: function (query, cb) {
        this.findOneAndDelete(query)
    }
};

const dto = mongoose.model("coll_barrios", schema);
module.exports = dto;