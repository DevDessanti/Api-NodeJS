var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      //-> por padrão localhost
        user : 'root',       //-> por padrão root
        password : '',  //-> sua senha definida
        database : 'todo'       //-> nome do seu banco criado
     }
});
module.exports = knex