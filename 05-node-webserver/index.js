require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// settings
// app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.render('index');
})

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});