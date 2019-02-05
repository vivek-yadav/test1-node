'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || '0.0.0.0';

var version = process.env.VERSION || "1.0";
var desc = process.env.DESC || "pre-interview technical test";
var lastcommitsha = process.env.LAST_COMMIT_SHA || "SHA***---***";

var healthcheck = {
    "myapplication": [
        {
            "version": version,
            "description" : desc,
            "lastcommitsha": lastcommitsha
        }
    ]
}

// App
const app = express();
app.get('/healthcheck', (req, res) => {
  res.send(JSON.stringify(healthcheck));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


