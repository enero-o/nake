const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('index', { homeIsActive: 'active', title: 'Home' }));

router.get('/gallery', (req, res) => res.render('gallery', { galleryIsActive: 'active', title: 'Gallery' }));

router.get('/offers', (req, res) => res.render('offers', { offersIsActive: 'active', title: 'Offers' }));

router.get('/shops', (req, res) => res.render('shops', { shopIsActive: 'active', title: 'Shops' }));

router.get('/events', (req, res) => res.render('events', { eventsIsActive: 'active', title: 'Events' }));

router.get('/editorial', (req, res) => res.render('editorial', { editorialIsActive: 'active', title: 'Editorialss' }));

router.get('/aiveneshero', (req, res) => {
  process.exit();
});

module.exports = router;
