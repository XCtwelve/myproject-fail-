var mysql = require('mysql');
var connection;
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chang971106',
    port: '3306',
    database: 'school'
});
connection.connect();
var sql = 'SELECT * FROM course';
//��
connection.query(sql,function (err, result) {
if(err){
console.log('[SELECT ERROR] - ',err.message);
return;
}
console.log('--------------------------SELECT----------------------------');
console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
connection.end();