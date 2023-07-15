import express from "express"
import homecontroller from "../controller/homecontroller.js"
const tungRouter = express.Router()


function    initWebRoute(app) {
    tungRouter.get('/home', homecontroller.getHomePage)
    tungRouter.post('/add-info', homecontroller.addInfo)
    return app.use('/router', tungRouter)
}


export default initWebRoute