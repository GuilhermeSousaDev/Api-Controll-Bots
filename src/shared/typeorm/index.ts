import { createConnection } from 'typeorm';

createConnection()
    .then(_ => console.log("Conectado"))
    .catch(e => console.log(e));