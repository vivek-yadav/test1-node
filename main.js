var http = require("http");

var version = process.env.VERSION || "1.0"
var desc = process.env.DESC || "pre-interview technical test"
var lastcommitsha = process.env.LAST_COMMIT_SHA || "SHA***---***"

var healthcheck = {
    "myapplication": [
        {
            "version": version,
            "description" : desc,
            "lastcommitsha": lastcommitsha
        }
    ]
}

var express = require('express');
var app = express();

app.get('/healthcheck', function (req, res) {
   res.send(JSON.stringify(healthcheck));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})