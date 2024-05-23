// const pool = require('./connection');

// class DB {
//     constructor() {}

//     async query(sql, args = []) {
//         const client = await pool.connect();
//         try {
//             const result = await client.query(sql, args);
//             return result;
//         } catch(err) {
//             console.error(err);
//         } finally {
//             client.release();
//         }
//     }


// }