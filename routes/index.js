//_ routes

const express = require('express');
const router = express.Router();

//_ load flat data
const { projects } = require('../data.json');

//_ GET routes
router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    res.redirect('/project/0');
});

router.get('/project/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.locals.project = projects[id];
    res.render('project');
});

//_ POST routes

module.exports = router;
