const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Search for gifts
router.get('/', async(req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        // Build the search query
        let query = {};

        // Filter by category
        if (req.query.category) {
            query.category = req.query.category;
        }

        // Filter by condition
        if (req.query.condition) {
            query.condition = req.query.condition;
        }

        // Filter by name (case-insensitive partial match)
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: 'i' };
        }

        // Filter by age_years (less than or equal to)
        if (req.query.age_years) {
            const ageYears = parseInt(req.query.age_years);
            const ageCategory = req.query.age_years;
            query.age_years = { $lte: ageYears };
        }

        const gifts = await collection.find(query).toArray();

        res.json(gifts);
    } catch (e) {
        logger.error('Error searching gifts:', e);
        next(e);
    }
});

module.exports = router;