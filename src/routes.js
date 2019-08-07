const express = require(`express`)
const routes = express.Router()

routes.get(`/`,(req,res) => {
    return res.send(`hello ${req.query.name}`)
})

routes.get(`/devs`,(req,res) => {
    return res.json(`ok`: `true`))
})

module.exports = routes