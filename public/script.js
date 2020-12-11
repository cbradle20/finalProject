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