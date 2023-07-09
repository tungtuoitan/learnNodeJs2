import express from "express";

const configViewEngine = (app)=>{
    app.use(express.static('./src/public')) //middleware: tìm kiếm file tĩnh trong path và trả về khi được yêu cầu
    app.set('view engine', 'ejs') // set ejs là view engine
    app.set('views', './src/views') // set path cho file view folder
    // res.set('Content-Type', 'text/css') // content type là kiểu dữ liệu của dữ liệu được trả về
}

export default configViewEngine