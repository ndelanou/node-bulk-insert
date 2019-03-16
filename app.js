const app = require('express')()
const http = require('http').Server(app)
const bodyParser = require('body-parser')

const db = require('./db/DBService')
const Config = require('./config.json')
const mountRoutes = require('./routes')
const port = process.env.PORT || Config.PORT

console.log('[SERVER] - Launching...')

app.use(bodyParser.json({ limit: '50mb' })) // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })) // Support URL-encoded bodies

// Init DB for entire app
this.initDB = async () => {
    try {
        await db.initDB()
    
        /* Defines express routes */
        mountRoutes(app)
    
        /* HTTP SERVER */
        http.listen(port, () => {
            console.log('[SERVER] - Launched & ready')
            console.log('[SERVER] - PORT: %d', port)
            console.log('[SERVER] - PID: %d', process.pid)
        })
    
    } catch (err) {
        console.error('Failed to init DB')
        console.error(err)
    }
}

this.initDB()
