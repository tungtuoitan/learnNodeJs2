import express from 'express'
import configViewEngine from './src/configs/viewEngine.mjs'
import http from 'http'
import initWebRoute from './src/route/web.mjs'
import homecontroller from './src/controller/homecontroller.js'

const app = express() // tạo 1 ứng dụng web với framework express
const port = process.env.PORT || 8080
const server = http.createServer(app); // tạo server HTPP
import tungRouter from './src/route/web.mjs'
import dotenv from 'dotenv'
import connection from './src/configs/connectDB.js'
dotenv.config()
configViewEngine(app)
initWebRoute(app)

server.listen(port, () => {
  console.log(`>>>>>>>>>>>>>>>>>> ${port}`)
})
app.get('/api/data', homecontroller.getConnectDB)




