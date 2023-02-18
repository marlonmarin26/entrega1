const controller = require("../controller/logic/casa.controller")

module.exports = (app) => {
    app.get("/casa", (req, res, next) => {
        controller.getAll(req, res, next)
    })
    app.get("/casa/bycode/:direccion", (req, res, next) => {
        controller.getByCode(req, res, next)
    })
    app.post("/casa", (req, res, next) => {
        controller.createCasa(req, res, next)
    })
    app.put("/casa", (req, res, next) => {
        controller.updateCasa(req, res, next)
    })
    app.delete("/casa", (req, res, next) => {
        controller.deleteCasa(req, res, next)
    })
}