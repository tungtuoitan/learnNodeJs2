import connection from "../configs/connectDB.js"
let getHomePage = (req,res)=>{
    return res.render('page1.ejs',{username:'John',data:connection.data})
}
let getConnectDB = (req,res)=>{
    res.json(connection.data)
}

    

export default {
    getHomePage,
    getConnectDB,
    getConnectDB
}