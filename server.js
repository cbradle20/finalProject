// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/api')
  .get(async(req, res) => {
      console.log('GET request detected');
      res.send(`Lab 5 for ${process.env.NAME}`);
    })
  
  .post(async(req, res) => {

    console.log('POST request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json?agency=POLICE');
    const json = await data.json();
    console.log('Fetch request data', req.body);
    res.json(json);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


/* Links:
export API endpoints links:
(The amount of money spent is data point 12 over before the description)
2015: https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json?agency=POLICE
2016: https://data.princegeorgescountymd.gov/resource/csi4-9jzc.json?agency=POLICE
2017: https://data.princegeorgescountymd.gov/resource/364y-gm2b.json?agency=POLICE
2018: https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json?agency=POLICE
2019: https://data.princegeorgescountymd.gov/resource/p32t-azw8.json?agency=POLICE
*/






