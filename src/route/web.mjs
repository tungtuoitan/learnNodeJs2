import express from "express"
import homecontroller from "../controller/homecontroller.js"
const tungRouter = express.Router()


function initWebRoute(app) {
    tungRouter.get('/home', homecontroller.getHomePage)
    return app.use('/router', tungRouter)
}


export default initWebRoute