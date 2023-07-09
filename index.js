import express from 'express'
import configViewEngine from './src/configs/viewEngine.mjs'
import http from 'http'

const app = express() // tạo 1 ứng dụng web với framework express
const port = process.env.PORT || 8080
const server = http.createServer(app); // tạo server HTPP
import tungRouter from './src/route/web.mjs'
import dotenv from 'dotenv'
dotenv.config()
configViewEngine(app)

server.listen(port, () => {
  console.log(`>>>>>>>>>>>>>>>>>> ${port}`)
})


app.use('/router',tungRouter)





