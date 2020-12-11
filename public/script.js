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

  function serverResponse(jsonResults) {
    console.log('jsonResults', jsonResults);
    sessionStorage.setItem('payeesList', JSON.stringify(jsonResults));
    const reorganizedData = convertRestaurantsToCategories(jsonResults);
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

