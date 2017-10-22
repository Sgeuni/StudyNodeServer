var OrientDB = require('orientjs');

var server = OrientDB({
   host: 'localhost',
   port: 2424,
   username: 'root',
   password: 'rntfjr'
});

var db = server.use('o2');

/*
db.record.get('#26:0')
    .then(function(record) {
        console.log('Loaded record:', record.title);
});
*/

// CREATE

// var sql = 'SELECT FROM topic';
// db.query(sql).then(function(results){
//    console.log(results);
// });

var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
    params: {
        rid:'#27:0'
    }
};
db.query(sql, param).then(function(results){
    console.log(results);
});