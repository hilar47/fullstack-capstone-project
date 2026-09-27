require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./logger');
const connectToDatabase = require('./db');

const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB on startup
connectToDatabase()
    .then(() => {
        logger.info('Connected to DB');
    })
    .catch((e) => console.error('Failed to connect to DB', e));

app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
});

// Route middlewares
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Inside the server');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
