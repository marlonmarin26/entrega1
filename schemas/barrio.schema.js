const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const barrioSchema = new mongoose.Schema({
    nombre:{
        type: "String",
        required: true,
        unique: true
    },
    ciudad:{
        type: "String",
        required: true
    },
    codigoPostal:{
        type: "Number",
        required: true
    }
});

barrioSchema.plugin(validator);
module.exports = barrioSchema;