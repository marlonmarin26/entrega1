/** packages */
const express = require('express');
const config = require('config');
const bodyParser = require("body-parser")


/** app configuration */
const app = express();
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
)
app.use(jsonParser)
app.use(urlEncodedParser)

const ipFn = require('./middleware/getIpAddress');
app.use("*", ipFn);

/** methods */
app.get("/", (req, res, next) =>{
    res.send("welcome to restapi")
})

const barrioRoutes = require('./routes/barrio.routes');
barrioRoutes(app);
const casaRoutes = require('./routes/casa.routes');
casaRoutes(app);

app.listen(port, () => {
    console.log("Server is running...");
});