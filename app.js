const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


app.get('/',(req,res) => {
    res.send({
        parole: "none"
    })
});

app.listen(port, () => {
    console.log(`Sever is active on ${port}`);
});