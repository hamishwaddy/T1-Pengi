const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI =
    `mongodb://heroku_jrht6x4v:6m5tgakda2u5feimpjj1mmd19e@ds027308.mlab.com:27308/heroku_jrht6x4v`;

const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db('test').collection('entries');
    client.close();
});

const app = express();

app.listen(8080);



