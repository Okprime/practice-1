const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send({
        parole: "none"
    })
});

app.listen(3000, () => {
    console.log('Server is Active on Port 3000')
});