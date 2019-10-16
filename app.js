//_ fullstack javascript
//_ techdegree project 6

//_ requires
const express = require('express');

//_ setup
const app = express();
app.set('view engine', 'pug');

//_ serve static assets
app.use('/static', express.static('public'));

//_ setup routes
const routes = require('./routes');
app.use(routes);

//_ error handling
app.use((req, res, next) => {
    let err = new Error('404');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.send(`${err}`);
});

//_ launch
const port = 3000;

app.listen(port, () => {
    console.log(`Live on localhost:${port}`); 
});
