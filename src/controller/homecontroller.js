import {
    mainF,
    thenF
} from "../configs/connectDB.js"
import mysql2 from 'mysql2'
import mysql from 'mysql2/promise'




let getHomePage = async (req, res) => {
    const data = await mainF().then(thenF)

    return res.render('page1.ejs', {
        username: 'John',
        data: data
    })
}
let getConnectDB = (req, res) => {
    res.json(data)
}
let getPage2 = async (req, res) => {
    const id = req.params.id
    const pool = await mysql.createPool({
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        database: 'nodejsbasic'
    })
    let user = await pool.execute('SELECT * FROM `user` WHERE id =?', [id])
    console.log(user[0])
    return res.render(`page${id}.ejs`)
}
let addInfo = async (req, res) => {
    const pool = await mysql.createPool({
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        database: 'nodejsbasic'
    })
    const [idMax, field] = await pool.query('(SELECT MAX(id) FROM `user`)')
    const newId = idMax[0]["MAX(id)"] + 1
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + idMax[0]["MAX(id)"])
    await pool.query('INSERT INTO `user` (id,firstName, lastName, email,address) VALUE (?,?,?,?,?)',
        [newId, req.body.firstname, req.body.lastname, req.body.email, req.body.address])
        res.send('Uncle Ho muon nam')
}
export default {
    getHomePage,
    getConnectDB,
    getPage2,
    addInfo
}