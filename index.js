#! /usr/bin/env node
'use strict';

const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('Hello from app-a');
});

app.listen(4000, () => {
    console.log('app-a running at http://localhost:4000');
});
