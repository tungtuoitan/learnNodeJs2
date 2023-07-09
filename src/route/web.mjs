import express from "express"
const tungRouter = express.Router()

tungRouter.get('/john', (req, res) => {
    res.render('index', {
        username: 'John'
    })
})
console.log(express + '>>>>>>>>>>>>>>>>>>>>>>>>>')
export default tungRouter