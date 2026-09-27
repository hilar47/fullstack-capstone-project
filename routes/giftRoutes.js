const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');
const logger = require('../logger');

// Get all gifts -> GET /api/gifts
router.get('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gifts = await collection.find({}).toArray();

        res.json(gifts);
    } catch (e) {
        logger.error('Error fetching gifts:', e);
        next(e);
    }
});

// Get a single gift by ID -> GET /api/gifts/:id
router.get('/:id', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const id = req.params.id;
        const gift = await collection.findOne({ id: id });

        if (!gift) {
            return res.status(404).send('Gift not found');
        }

        res.json(gift);
    } catch (e) {
        logger.error('Error fetching gift by ID:', e);
        next(e);
    }
});

module.exports = router;
