const express= require('express');
const router = express.Router();


const mysqlConnection = require('../database');

// todo el registro de la tabla
router.get('/',(req, res) => {
    mysqlConnection.query('SELECT * FROM luz_temperatura', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// temperaturas de la tabla
router.get('/temperatura',(req,res) =>{
    mysqlConnection.query('select temperatura from luz_temperatura', (err,rows,fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// luz de la tabla
router.get('/luz',(req,res) =>{
    mysqlConnection.query('select luz from luz_temperatura', (err,rows,fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;