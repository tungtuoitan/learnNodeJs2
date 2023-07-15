import express from 'express'
import configViewEngine from './src/configs/viewEngine.mjs'
import http from 'http'
import initWebRoute from './src/route/web.mjs'
import homecontroller from './src/controller/homecontroller.js'

import bodyParser from 'body-parser'

const app = express() // tạo 1 ứng dụng web với framework express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080
const server = http.createServer(app); // tạo server HTPP
import tungRouter from './src/route/web.mjs'
import dotenv from 'dotenv'
dotenv.config()
configViewEngine(app)
initWebRoute(app)

server.listen(port, () => {
  console.log(`>>>>>>>>>>>>>>>>>> ${port}`)
})
app.get('/api/data', homecontroller.getConnectDB)
app.get('/router/pages/:id',homecontroller.getPage2)




