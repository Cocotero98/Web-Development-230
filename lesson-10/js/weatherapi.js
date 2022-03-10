let apiURL='https://api.openweathermap.org/data/2.5/forecast?id=5861897&appid=0cd66e608ce7503372a31896aad04b0e'
console.log('asd')
fetch(apiURL)
  .then((response) => console.log('yes'),response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log('yes')
  });