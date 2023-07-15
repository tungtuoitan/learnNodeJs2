import mysql2 from 'mysql2'
import mysql from 'mysql2/promise'

export const mainF = async function main() {

  // create the connection
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
  });
  // query database
  const [rows, fields] = await connection.execute('SELECT * FROM `user`')
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + rows)
  return rows
}
export function thenF (rows) {

    const results = []
    rows.forEach((item) => {
      const id = item.id
      delete item.id
      results[id - 1] = Object.assign({}, item)
    })
    return results
  
  }
  