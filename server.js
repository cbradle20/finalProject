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
<<<<<<< HEAD
      console.log('GET request detected');
      const data = await fetch('https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json?agency=POLICE');
      const json = await data.json();  
      console.log('data from fetch', json);
      res.json(json)
    })
  .post(async(req, res) => {

    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json?agency=POLICE');
    const json = await data.json();
    console.log('Fetch request data', json);
=======
    console.log('GET request detected');
    console.log('fetch request data', data);
    })
  .post(async(req, res) => {
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json?agency=POLICE');
    const json = await data.json();
>>>>>>> 1a2b64fbb3bb3cad3a091e5f04abfa48422eace9
    res.json(json);
    console.log('POST requested detected')
    console.log(data.status)
  });
/*
app.route('/api1')
  .get(async(req, res) => {
      console.log('GET request detected');
      const data2 = await fetch('https://data.princegeorgescountymd.gov/resource/csi4-9jzc.json?agency=POLICE');
      const json2 = await data2.json();  
      res.json(json2)
    })
  .post(async(req, res) => {

    console.log('POST request detected');
    const data2 = await fetch('https://data.princegeorgescountymd.gov/resource/csi4-9jzc.json?agency=POLICE');
    const json2 = await data2.json();
    console.log('Fetch request data', req.body);
    res.json(json2);
    console.log(data2.status)
  });
app.route('/api2')
  .get(async(req, res) => {
      console.log('GET request detected');
      const data3 = await fetch('https://data.princegeorgescountymd.gov/resource/364y-gm2b.json?agency=POLICE');
      const json3 = await data3.json();  
      res.json(json3)
    })
  .post(async(req, res) => {

    console.log('POST request detected');
    const data3 = await fetch('https://data.princegeorgescountymd.gov/resource/364y-gm2b.json?agency=POLICE');
    const json3 = await data3.json();
    console.log('Fetch request data', req.body);
    res.json(json3);
    console.log(data3.status)
  });

  app.route('/api3')
  .get(async(req, res) => {
      console.log('GET request detected');
      const data4 = await fetch('https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json?agency=POLICE');
      const json4 = await data4.json();  
      res.json(json4)
    })
  .post(async(req, res) => {

    console.log('POST request detected');
    const data4 = await fetch('https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json?agency=POLICE');
    const json4 = await data4.json();
    console.log('Fetch request data', req.body);
    res.json(json4);
    console.log(data4.status)
  });
  app.route('/api4')
  .get(async(req, res) => {
      console.log('GET request detected');
      const data5 = await fetch('https://data.princegeorgescountymd.gov/resource/p32t-azw8.json?agency=POLICE');
      const json5 = await data5.json();  
      res.json(json5)
    })
  .post(async(req, res) => {

    console.log('POST request detected');
    const data5 = await fetch('https://data.princegeorgescountymd.gov/resource/p32t-azw8.json?agency=POLICE');
    const json5 = await data5.json();
    console.log('Fetch request data', req.body);
    res.json(json5);
    console.log(data5.status)
  });
*/
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






