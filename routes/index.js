//_ routes

const express = require('express');
const router = express.Router();

//_ load flat data
const { projects } = require('../data.json');

//_ GET routes
router.get('/', (req, res) => {
    res.render('index', { projects })
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    res.render('project', {project : projects[req.params.id]});
});

//_ POST routes

module.exports = router;
