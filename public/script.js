/* The purpose of this function is to convert the retrieved .JSON data file into a usable/readable
array that can be plotted within the CanvasJS chart. This involved taking the primary object element
being the payee_name out and forcing into a new collection/array. */
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

/*This function works in a similar fashion to the above. The only difference is that this searches for the 
"vendor_name" property within the object. The vendor_name is only present in the last dataset/JSON file in
the place of "payee_name"; it was labeled differently from the other JSON files, which had the "payee_name".*/
function vendorConversion(payeeArray) {
  return payeeArray.reduce((collection, item, i) => {
    const onlyPayee = collection.find((f) => f.label === item.vendor_name);
    if (!onlyPayee) { 
      collection.push({
        label: item.vendor_name, y:1
      });
    } else {
      onlyPayee.y +=1;
    }
    return collection;
  }, [])
}


//This function will create the main chart for each .JSON file that is pulled from the server.
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
      text: 'The Top Payees Within the Police Agency'
    },
    axisX: {
      interval: 1,
      labelFontSize: 8,
      labelAngle: 0,
      viewportMaximum: 15,
      title: 'Top Payees'
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Number of Payments',
      labelFontSize: 10,
      scaleBreaks: {customBreaks: [
        { startValue: 40, endValue: 50, color: '#FAA586' },
        { startValue: 85, endValue: 100, color: '#FAA586' },
        { startValue: 140, endValue: 175, color: '#FAA586' }
      ]}
    },
    /*The "name" aspect of the data changes based on the dataset. The last .JSON file has "vendor_name" in the place
    of "payee_name". This aspect checks for both names.*/
    data: [{
      type: 'column',
      name: 'payee_name' || 'vendor_name',
      axisYType: 'secondary',
      dataPoints: policePayeeData
    }]
  };
}

function serverResponse(jsonResults) {
  console.log('jsonResults', jsonResults);
  sessionStorage.setItem('payeesList', JSON.stringify(jsonResults));
  const reorganizedData = payeeConversion(jsonResults);
  reorganizedData.sort();
  reorganizedData.reverse();
  const options = makeYourOptionsObject(reorganizedData);
  const chart = new CanvasJS.Chart('chartContainer', options);
  chart.render();
}

function serverVendorResponse(jsonResults){
  console.log('jsonResults', jsonResults);
  sessionStorage.setItem('payeesList', JSON.stringify(jsonResults));
  const reorganizedData = vendorConversion(jsonResults);
  reorganizedData.sort();
  reorganizedData.reverse();
  const options = makeYourOptionsObject(reorganizedData);
  const chart = new CanvasJS.Chart('chartContainer', options);
  chart.render();
}
/* create element of based on the id of the button*/

var but2015 = document.getElementById("button-2015");
/* fetch the api of the 2015 data*/
but2015.addEventListener("click", async (e) => {
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
/*create an element based on the id of the button from 2016 */
var but2016 = document.getElementById("button-2016");
/*fetch the api for the 2016 data */
but2016.addEventListener("click", async (e) => {
  e.preventDefault(e);
  const form = $(e.target).serializeArray();
  fetch('/api1', {
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

/* Create element for the 2017 button*/
var but2017 = document.getElementById("button-2017");

/* fetch the data from the 2017 api*/
but2017.addEventListener("click", async (e) => {
  e.preventDefault(e);
  const form = $(e.target).serializeArray();
  fetch('/api2', {
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
/* Create element for the 2018 data */ 
var but2018 = document.getElementById("button-2018");

/* fetch the data from the 2018 api*/
but2018.addEventListener("click", async (e) => {
  e.preventDefault(e);
  const form = $(e.target).serializeArray();
  fetch('/api3', {
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

/* create element for the 2019 data*/
var but2019 = document.getElementById("button-2019");


/*fetch the 2019 api datas */
but2019.addEventListener("click", async (e) => {
  e.preventDefault(e);
  const form = $(e.target).serializeArray();
  fetch('/api4', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => serverVendorResponse(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});