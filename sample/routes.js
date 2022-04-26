/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const mockData = require('./mock-data');

const router = express.Router();
router.use(bodyParser.json());

/* Generator API */
router.get("/generator", (req, res) => {
  res.send(mockData.generators);
});

router.get("/generator/:id", (req, res) => {
  const generator = mockData.generators.find((gen) => gen.id === req.params.id);
  if (!generator)
    res.sendStatus(404);  // Not found
  else
    res.send(generator);
});

/* Exposure API */
router.get("/generator/:generatorId/exposure", (req, res) => {
  const generator = mockData.generators.find((gen) => gen.id === req.params.generatorId);
  if (!generator) {
    res.sendStatus(404);  // Not found
    return;
  }

  const exposures = mockData.exposures[req.params.generatorId];
  res.send(exposures);
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