require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('../server/controller');
const massive = require('massive');
const cors = require('cors')
const port = 8080

app.use(cors())
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING)
.then(db => {
    app.set('db', db)
    console.log('database is connected')
    })
    .catch(err => {
        console.log('database connection error', err)
})

app.get('/health', (req, res) => {
    return res.send('ok')
});



app.listen(port, function(){
    console.log(`http://localhost:${this.address().port} server is running on port ${port}` )
})