const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


app.get('/',(req,res) => {
    res.send({
        parole: "none"
    })
});

app.get('/karo', (req, res) => {
    res.send('I am getting there');
});

app.listen(port, () => {
    console.log(`Sever is active on ${port}`);
});