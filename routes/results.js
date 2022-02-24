const { Router } = require('express');

const results = require('../test.json')
// const db = require('../database');

const router = Router();

router.get('/', (req, res) => {
  const { athleteId } = req.query;
  console.log(athleteId);
  if(athleteId) {
    const result = results.filter((result) => Number(result.athleteNumber) === Number(athleteId));
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send('No results for this athlete in our records');
    }
  }
})

router.get('/all', async (req, res) => {
  try {
    const queryResults = await db.promise().query('SELECT * FROM alltimeresults LIMIT 250000;');
    // res.status(200).send('Got the results');
    res.status(200).send(queryResults[0]);
  } catch (err) {
    console.log(err);
  } 
})

module.exports = router;