/*const arr2015 = [];
const arr2016 = [];
const arr2017 = [];
const arr2018 = [];
const arr2019 = [];

fetch('/api', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())
.then(data => arr2015.push(...data))
console.log(arr2015);
;

fetch('/api1', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())
.then(data2 => arr2016.push(...data2))
console.log(arr2016);
;
fetch('/api2', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())
.then(data3 => arr2017.push(...data3))
console.log(arr2017);
;
fetch('/api3', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())
.then(data4 => arr2018.push(...data4))
console.log(arr2018);
;
fetch('/api4', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())
.then(data5 => arr2019.push(...data5))
console.log(arr2019);
;
*/

function payeeConversion(payeeArray) {
    return payeeArray.reduce((collection, item, i) => {
      const onlyPayee = collection.find((f) => f.label === item.payee_name);
      if (!onlyPayee) { 
        collection.push({
          label: item.payee_name, y:1
        });
      } else {
        onlyPayee.y +=1;
      }
      return collection;
    }, [])
  }


  function makeYourOptionsObject(policePayeeData) {
    CanvasJS.addColorSet('customColorSet1', [
      '#4661EE',
      '#EC5657',
      '#1BCDD1',
      '#8FAABB',
      '#B08BEB'
    ]);
  
    return {
      animationEnabled: true,
      colorSet: 'customColorSet1',
      title: {
        text: 'Police Data Test'
      },
      axisX: {
        interval: 1,
        labelFontSize: 12
      },
      axisY2: {
        interlacedColor: 'rgba(1,77,101,.2)',
        gridColor: 'rgba(1,77,101,.1)',
        title: 'Top Payers',
        labelFontSize: 12,
        scaleBreaks: {customBreaks: [
          { startValue: 40, endValue: 50, color: '#FAA586' },
          { startValue: 85, endValue: 100, color: '#FAA586' },
          { startValue: 140, endValue: 175, color: '#FAA586' }
        ]}
      },
      data: [{
        type: 'amount',
        name: 'payee_name',
        axisYType: 'secondary',
        dataPoints: policePayeeData
      }]
    };
  }

  function serverResponse(jsonResults) {
    console.log('jsonResults', jsonResults);
    sessionStorage.setItem('payeesList', JSON.stringify(jsonResults));
    const reorganizedData = payeeConversion(jsonResults);
    const options = makeYourOptionsObject(reorganizedData);
    const chart = new CanvasJS.Chart('chartContainer', options);
    chart.render();
  }

  document.body.addEventListener('submit', async (e) => {
    e.preventDefault(e);
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => serverResponse(jsonFromServer))
      .catch((err) => {
        console.log(err);
      });
  });

  /*document.getElementById('button-2015').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((serverResults) => serverResults.json())
      //.then((jsonResults) => serverResponse(jsonResults))
      .then((jsonResults) => {
        console.log(jsonResults);
      })
      .catch((err) => {
        console.log(err);
      });
  });

fetch('/api', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())*/