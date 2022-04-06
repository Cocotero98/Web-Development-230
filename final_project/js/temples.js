fetch('https://cocotero98.github.io/wdd230/final_project/data/data.json')
.then(response=>response.json())
.then(jsonData=>console.log(jsonData.temples))