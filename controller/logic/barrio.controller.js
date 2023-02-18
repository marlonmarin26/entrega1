const barrioDto = require('../../model/dto/barrio.dto');
const config = require('config');
const casaDto = require('../../model/dto/casa.dto');

exports.createBarrio = (req, res, next) => {
    let barrio = {
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        codigoPostal: req.body.codigoPostal
    };
    barrioDto.create(barrio, (err, data) => {
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

exports.updateBarrio = (req, res, next) => {
    let barrio = {
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        codigoPostal: req.body.codigoPostal
    };
    barrioDto.update({ _id: req.body.id }, barrio, (err, data) => {
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

    barrioDto.getAll({}, (err, data) => {
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

    barrioDto.getByCode({ nombre: req.params.nombre }, (err, data) => {
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

exports.deleteBarrio = () =>  {
    barrioDto.delete({ _id: req.body.id }, (err, data) => {
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