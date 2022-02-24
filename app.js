const express = require('express');

const athletesRoute = require('./routes/athletes');
const clubResultsRoute = require('./routes/clubResults');
const resultsRoute = require('./routes/results');


const app = express();

app.use('/athletes', athletesRoute);
app.use('/clubResults', clubResultsRoute);
app.use('/results', resultsRoute);
  
app.get('/', (req, res) => {
    // res.sendStatus(200);
    // res.status(200).send("Rah my man got lied to");
    res.status(200).send({
        msg: 'yo'
    });
})
  
app.listen(333, () => {
  console.log('yo 3 my mans')
})
