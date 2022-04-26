/* jshint esversion: 6 */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// swagger support
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../api/intraoral-exposure-service-swagger.json');

// import our routes for the Exposure API
const router = require('./routes');

// Port can be overriden by environment
const PORT = process.env.PORT || 8080;

const app = express();

// Add middleware for logging and CORS support
app.use(morgan("dev"));
app.use(cors());

// Make API available using a versioned API endpoint
app.use('/api/v1/', router);

// replace the Servers in our swagger spec to use this mock service
swaggerSpec.servers = [{
    url: `http://localhost:${PORT}/api/v1/`,
    description: 'Mock Service'
}];

// Serve Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Redirect base to show Swagger document
app.get('/', function(req, res){
    res.redirect('/api/docs');
});

// Start the service
app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));