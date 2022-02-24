const { Router } = require('express');

const athletes = [
    {
      "athleteId": 69706,
      "Name": "James",
      "Surname": "Martin"
    },
    {
      "athleteId": 5238307,
      "Name": "Jam",
      "Surname": "0"
    },
    {
      "athleteId": 5520154,
      "Name": "Nabeel",
      "Surname": "Iqbal"
    },
    {
      "athleteId": 5724704,
      "Name": "Will",
      "Surname": "Godden"
    },
    {
      "athleteId": 6055070,
      "Name": "Samay",
      "Surname": "M"
    }
  ]

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send(athletes)
})

router.get('/:athleteId', (req, res) => {
    const { athleteId } = req.params;
    const fname = athletes.find((athlete) => Number(athlete.athleteId) === Number(athleteId))
    if (fname) {
        res.status(200).send(fname);
    } else {
        res.status(404).send('No athlete with this athleteId in our records');
    }
})

module.exports = router;