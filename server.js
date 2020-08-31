const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const api = require('./api');

const port = process.env.PORT || 1337

const app = express();

app.get('/products', api.listProducts);
app.get('/products/:id', api.getProduct);

app.listen(port, () => console.log(`server listening on port ${port}`))