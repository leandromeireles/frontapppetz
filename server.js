const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + "/dist/petzappfront"));


app.get('/*', (req, res) => {
    
    res.sendFile(path.join(__dirname + "/dist/petzappfront/index.html"));
    });
    
app.listen(process.env.PORT || 8080);