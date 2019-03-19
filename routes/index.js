// Routes
// const loginRoutes = require('./login')

const InsertService = require('../utils/InsertService')

const basic = require('../models/basic')
const parameter = require('../models/parameter')
const pg_function = require('../models/pg_function')

module.exports = (app) => {

    app.set('json spaces', 2)
    app.get('/', (req, res) => res.send(''))

    app.get('/basic', async (req, res) => {
        try {
            const result = await InsertService.insert(basic)
            res.json(result)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    })

    app.get('/parameter', async (req, res) => {
        try {
            const result = await InsertService.insert(parameter)
            res.json(result)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    })

    app.get('/pg_function', async (req, res) => {
        try {
            const result = await InsertService.insert(pg_function)
            res.json(result)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    })

    app.get('/all', async (req, res) => {
        try {
            const result_basic = await InsertService.insert(basic)
            const result_parameter = await InsertService.insert(parameter)
            const result_pg_function = await InsertService.insert(pg_function)

            res.json({
                basic: result_basic,
                parameter: result_parameter,
                pg_function: result_pg_function
            })
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    })

    // 404
    app.use(function(req, res, next) {
        res.status(404).send('404 - Not found')
    })
}
