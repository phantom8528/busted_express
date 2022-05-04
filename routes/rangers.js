const express = require('express');
const router = express.Router();

const rangersModel = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'List of Power Rangers',
            data: rangersModel
        },
        partials: {
            body: 'partials/ranger-list',
        },
    });
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params;
    const ranger = rangersModel.find((ranger => ranger.slug === slug))//<-- Fix 7: Added Parentheses
    if (ranger) {
        res.render('template', {
            locals: {
                title: `Power Ranger: ${ranger.name}`,
                ranger
            },
            partials: {
                body: 'partials/ranger-details',
            },
        });
    } else {
        res.status(404).send(`No Ranger found that matches slug, ${slug}`);
    }

});
