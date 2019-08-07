const express = require(`express`)
const routes = require(`./routes`)
const server = express();


router.use(routes)


server.listen(3333)