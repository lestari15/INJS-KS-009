const db = require("../db")

class Admin{
    static create (req, res) {
        const {nama, alamat} = req.body

        db.query(`insert into "Admin" (nama, alamat) values ('${nama}', '${alamat}')`,
        (err, result) => {
            // return console.log(err)
            if(err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message
                })
            } else {
                return res.status(201).json({
                    status : 'success',
                    message: 'success add data',
                    data: result.rows
                })
            }
        }     
    )}

    static read (req, res) {
        db.query(`select * from "Admin";`, (err, result) => {
            if(err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message,
                })
            } else {
                return res.status(200).json({
                    status : 'success',
                    message: 'success get all data',
                    data: result.rows
                })
            }
        })
    }

    static delete (req, res) {
        const id = req.params.id;
        db.query(`delete from "Admin" where id=${id};`, (err, result) => {
            if(err) {
                return res.status(400).json({
                    status: 'error',
                    message: err.message,
                })
            } else {
                return res.status(200).json({
                    status : 'success',
                    message: 'success delete data',
                })
            }
}

module.exports = Admin