/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const mockData = require('./mock-data');

const router = express.Router();
router.use(bodyParser.json());

/* Generator API */
router.get("/generator", (req, res) => {
  // return all generators
  res.send(mockData.generators);
});

router.get("/generator/:id", (req, res) => {
  // Return generator given by id param
  const generator = mockData.generators.find((gen) => gen.id === req.params.id);
  if (!generator)
    res.sendStatus(404);  // Not found
  else
    res.send(generator);
});

/* Exposure API */
router.get("/generator/:generatorId/exposure", (req, res) => {
  // Find the generator first
  const generator = mockData.generators.find((gen) => gen.id === req.params.generatorId);
  if (!generator) {
    res.sendStatus(404);  // Not found
    return;
  }

  // get all exposures for this generator
  // make sure we create a mutable array so we can filter the results
  let exposures = mockData.exposures[generator.id].slice();

  // Sorted exposures by date from newest to oldest
  exposures.sort((a,b) => b.recordedTime - a.recordedTime);

  // Create the response object
  const exposureResponse = {
    total: exposures.length,
    skip: 0,
    limit: exposures.length,
    exposures: exposures
  };

  // retrieve filter options from the query parameters
  const skip = req.query.skip;
  const limit = req.query.limit;
  const startTime = req.query.startTime;
  const endTime = req.query.endTime;
  
  // Apply optional time filters first
  if (startTime) {
    const startTimeDate = new Date(startTime);
    exposures = exposures.filter(exp => exp.recordedTime >= startTimeDate);
  }

  if (endTime) {
    const endTimeDate = new Date(endTime);
    exposures = exposures.filter(exp => exp.recordedTime <= endTimeDate);
  }

  // Apply pagination filters
  if (skip) {
    exposureResponse.skip = +skip;
    exposures.splice(0, exposureResponse.skip);
  }

  if (limit) {
    exposureResponse.limit = +limit;
    exposures = exposures.slice(0, exposureResponse.limit);
  }

  // update the response after filtering
  // Note: the skip and limit fields have already been populated
  exposureResponse.total = exposures.length;
  exposureResponse.exposures = exposures;

  // send back the filtered response
  res.send(exposureResponse);
});

router.get("/generator/:generatorId/exposure/:exposureId", (req, res) => {
  const generator = mockData.generators.find((gen) => gen.id === req.params.generatorId);
  if (!generator) {
    res.sendStatus(404);  // generator Not found
    return;
  }

  const exposures = mockData.exposures[req.params.generatorId];
  const exposure = exposures.find((exp) => exp.id === req.params.exposureId);
  if (!exposure) {
    res.sendStatus(404);  // Exposure not found
    return;
  }

  res.send(exposure);
});

module.exports = router;