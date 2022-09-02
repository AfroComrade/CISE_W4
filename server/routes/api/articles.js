const express = require('express');
const router = express.Router();

const Article = require('../../models/Article');

router.get('/test', (req, res) => res.send('article route test'));

router.get('/', (req, res) => {
    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(404).json({ nobookfound: 'No Book Found'}));
});


router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
        .then(article => res.json({ msh: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});


/*
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

*/