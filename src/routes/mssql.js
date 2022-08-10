const { easeExpInOut } = require('d3')
const sql = require('mssql')


const { easeExpInOut } = require('d3')
var cors = require('cors'),
    express = require('express'),
    mssql = express.Router(),        
    sql = require('mssql');
    mssql.all('*', cors());

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=DESKTOP-R2KNOHM\SQLEXPRESS,1433;Database=pierian;User Id=;Password=;Encrypt=true')
        const result = await sql.query`select * from APTB`
        console.dir(result)
        exit();
    } catch (err) {
        // ... error checks
    }
}





