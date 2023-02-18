const controller = require("../controller/logic/barrio.controller")


module.exports = (app) => {
    app.get("/barrio", (req, res, next) => {
        controller.getAll(req, res, next)
    })
    app.get("/barrio/bycode/:nombre", (req, res, next) => {
        controller.getByCode(req, res, next)
    })
    app.post("/barrio", (req, res, next) => {
        controller.createBarrio(req, res, next)
    })
    app.put("/barrio", (req, res, next) => {
        controller.updateBarrio(req, res, next)
    })
    app.delete("/barrio", (req, res, next) => {
        controller.deleteBarrio(req, res, next)
    })
}