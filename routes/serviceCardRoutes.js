// routes/serviceCardRoutes.js

const express = require('express');
const router = express.Router();

const serviceCardController = require('../controllers/serviceCardController');

router.post('/service-cards',  serviceCardController.createServiceCard);
router.get('/servicecard/:id', serviceCardController.getCardById);
router.put('/servicecards/:id', serviceCardController.updateServiceCard);

router.get('/service-cards/:id', serviceCardController.getServiceCard);

router.get('/service-cards', serviceCardController.getAllServiceCards);



module.exports = router;
