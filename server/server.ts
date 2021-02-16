//import * as express from 'express';
import express = require('express');
//import { routes } from './routes';


const app = express();
//const auth = require('basic-auth')


var router = express.Router();
var request = require('request');




app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.header('Authorization', 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.get('/', function(req, res, next) {
    request({
      uri: 'https://api.duda.co/api/sites/multiscreen/templates',
      'headers': {
        'Authorization': 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
        'Content-Type': 'application/json'
      }
    //   qs: {
    //       Authorization:  'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2'
    //   }
    }).pipe(res);
    //res.send(res).json; 
  });
  



// app.use(express.json());

// //app.use('/', routes);

// app.get('/', (req, res) => {
//     //var url = 'https://jsonplaceholder.typicode.com/posts';
//     var url ='https://jsonplaceholder.typicode.com/posts';   
//     req.pipe(request(url)).pipe(res);
//     res.send([{message: 'hello world'}]);
// });

app.listen(4201, '127.0.0.1'), function() {
    console.log('Server now listening on 4201');
}