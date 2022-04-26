/* jshint esversion: 6 */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

// Port can be overriden by environment
const PORT = process.env.PORT || 8080;

const app = express();

// Add middleware for logging and CORS support
app.use(morgan("dev"));
app.use(cors());

// Expose API using base endpoint api/v1
app.use('/api/v1/', router);

// Start the service
app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));