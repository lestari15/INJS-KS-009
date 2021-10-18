const db = require("./db")

// Async - Async-await, callback, promise
db.query(`
create table if not exists "Admin"(
    id serial primary key not null,
    nama char not null,
    alamat text not null
);
`, (err, res) =>{
    if (err) {
        console.log(err)
    } else {
        // console.log(res.row)
        
    }
})
