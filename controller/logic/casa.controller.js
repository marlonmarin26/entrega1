const barrioDto = require('../../model/dto/barrio.dto');
const config = require('config');
const casaDto = require('../../model/dto/casa.dto');

exports.createCasa = (req, res, next) => {
    let casa = {
        mtsCuadrados: req.body.mtsCuadrados,
        baños: req.body.baños,
        habitaciones: req.body.habitaciones,
        pisos: req.body.pisos,
        direccion: req.body.direccion,
        color: req.body.color,
        barrio_id: req.body.barrio_id
    };
    casaDto.create(casa, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        // notHelper.sendSMS(phone)
        res.status(201).json(
            {
                info: data
            }
        )
    })
}

exports.updateCasa = (req, res, next) => {
    let casa = {
        mtsCuadrados: req.body.mtsCuadrados,
        baños: req.body.baños,
        habitaciones: req.body.habitaciones,
        pisos: req.body.pisos,
        direccion: req.body.direccion,
        color: req.body.color,
        barrio_id: req.body.barrio_id
    };
    casaDto.update({ _id: req.body.id }, casa, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(201).json(
            {
                info: data
            }
        )
    })
}


exports.getAll = (req, res, next) => {

    casaDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )
    })
}

exports.getByCode = (req, res, next) => {

    casaDto.getByCode({ direccion: req.params.direccion }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )
    })
}

exports.deleteCasa = () =>  {
    casaDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )
    })
}