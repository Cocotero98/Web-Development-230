fetch('../data/data.json')
.then(response=>response.json())
.then(jsonData=>console.log(jsonData.temples))