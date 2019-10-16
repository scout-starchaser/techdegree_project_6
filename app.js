//_ fullstack javascript
//_ techdegree project 6

//_ requires
const express = require('express');

//_ setup
const app = express();
app.set('view engine', 'pug');

//_ load flat data
const { projects } = require('./data.json');

//_ serve static assets
app.use('/static', express.static('public'));

//_ middleware
app.use('/project/:id', (req, res, next) => {
    
    const id = parseInt(req.params.id);
    
    if(id >= 0 && id < projects.length) {
        next();
    } else {
        let err = new Error('I couldn\'t find that :(');
        next(err);
    }

});

//_ setup routes
const routes = require('./routes');
app.use(routes);

//_ error handling
app.use((req, res, next) => {
    let err = new Error('I couldn\'t find that :(');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if( err.status ) {
        res.status(err.status);
    }

    console.error(`[!] An error occurred: ${err.message}`);
    console.error(`Requested url: "${req.url}"`);
    res.render('error', { err });
});

//_ launch
const port = 3000;

app.listen(port, () => {
    console.log(`Live on localhost:${port}`); 
});
