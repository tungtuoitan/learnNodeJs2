import mysql2 from 'mysql2'

// create the connection to database
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic',
});

// simple query
// let connection.data
connection.query(
  'SELECT * FROM `user`',
  function(err, rows, fields) {
    if (err) throw err;

    console.log('>>>>>>>> check msql')

     // tạo array
     const results = []
     rows.forEach((item)=>{
        const id = item.id
        delete item.id
        results[id-1]=  Object.assign({},item)
     })
     connection.data = results

     
  }

);
export default connection