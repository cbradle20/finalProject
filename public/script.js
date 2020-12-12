function payeeConversion(payeesList) {
    return payeesList.reduce((collection, item, i) => {
      const findPayee = collection.find((f) => f.label === item.payee_name);
      if (!findPayee) { 
        collection.push({
          label: item.payee_name,y: 1
        });
      } else {
        findPayee.y +=1;
      }
      return collection;
    }, [])
  }

 

  function makeYourOptionsObject(policeData) {
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
        dataPoints: policeData
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
    e.preventDefault();
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((jResults) => jResults.json())
      .then((jsonResults) => serverResponse(Results))
      .catch((err) => {
        console.log(err);
      });
  });
