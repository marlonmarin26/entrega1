const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const casaSchema = new mongoose.Schema({
    mtsCuadrados:{
        type: "Number",
        required: true
    },
    baños:{
        type: "Number",
        required: true
    },
    habitaciones:{
        type: "Number",
        required: true
    },
    pisos:{
        type: "Number",
        required: true
    },
    direccion:{
        type: "String",
        required: true,
        unique: true
    },
    color:{
        type: "String",
        required: true
    },
    barrio_id:{
        type: mongoose.Types.ObjectId,
        ref: "coll_barrios",
        required: true
    }
});

casaSchema.plugin(validator);
module.exports = casaSchema;