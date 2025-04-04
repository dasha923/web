const post=require('./post_service')
const service_post=new post.ServicePost()
const user=require('./user_service')
const mysql = require("mysql2");
const connection=mysql.createConnection({
host:"127.0.0.1",
user:"root",
password:"root",
port: 3306
});
const Database = 'CREATE DATABASE IF NOT EXISTS psychology';

connection.query(Database, (err) => {
    if (err) {
        console.error('Ошибка при создании базы данных:', err);
    } else {
        console.log('База данных создана');
        connection.query('USE psychology', (err) => {
            if (err) {
                console.error('Ошибка при использовании базы данных:', err);
            } else {
                const sql = 'CREATE TABLE IF NOT EXISTS post (ID INT PRIMARY KEY, UID INT, Name VARCHAR(50), Text VARCHAR(3000))';
                connection.query(sql, (err, results) => {
                    if (err) {
                        console.error('Ошибка при создании таблицы:', err);
                    } else {
                        console.log('Таблица post создана');
                    }
                    const CreateTableUser = 'CREATE TABLE IF NOT EXISTS user (UID INT PRIMARY KEY, FullName VARCHAR(40), Number VARCHAR(15), Email VARCHAR(50), DateOfBirth DATE)';
          connection.query(CreateTableUser, (err, results) => {
            if (err) {
              console.error('Ошибка при создании таблицы user:', err);
            } else {
              console.log('Таблица user создана');
            }

            connection.end(); 
          });
        });
      }
    });
  }
});
class Articles {
 
 
    async Edit(pid, uid, text)
{
  await service_post.edit(uid,text,pid);
return new Promise((resolve, reject) => {
    const query = 'SELECT UID FROM post WHERE ID = ?';
    connection.query(query, [pid], (err, results) => {
      if (err) reject(err);
      resolve(results[0] && results[0].UID === uid);
    });
  });
}

}



