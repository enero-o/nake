const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('index', { homeIsActive: 'active', title: 'Home' }));

router.get('/gallery', (req, res) => res.render('gallery', { galleryIsActive: 'active', title: 'Gallery' }));

router.get('/offers', (req, res) => res.render('offers', { offersIsActive: 'active', title: 'Offers' }));

router.get('/shops', (req, res) => res.render('shops', { shopIsActive: 'active', title: 'Shops' }));

router.get('/events', (req, res) => res.render('events', { eventsIsActive: 'active', title: 'Events' }));

module.exports = router;
