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

// var sql = 'SELECT FROM topic WHERE @rid=:rid';
// var param = {
//     params: {
//         rid:'#27:0'
//     }
// };
// db.query(sql, param).then(function(results){
//     console.log(results);
// });

// INSERT
// var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";
//
// db.query(sql, {
//     params:{
//         title: 'Geuni',
//         desc: 'Geuni is Best'
//     }
// }).then(function(results){
//     console.log(results);
// });

// UPDATE
// var sql = "UPDATE topic SET title=:title WHERE @rid=:rid";
// db.query(sql, {params:{title:'GeuniUpdate', rid:'#26:1'}}).then(function(results) {
//     console.log(results);
// });

// DELETE
var sql = "DELETE FROM topic WHERE @rid=:rid";
db.query(sql, {
    params: {
        rid:'#26:1'
    }
}).then(function (result) {
   console.log(result);
});