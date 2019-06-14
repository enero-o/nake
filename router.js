const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.get('/gallery', (req, res) => res.render('gallery'));
router.get('/offers', (req, res) => res.render('offers'));
router.get('/shops', (req, res) => res.render('shops'));
router.get('/events', (req, res) => res.render('events'));

module.exports = router;
