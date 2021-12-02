const {fetchBreedDescription} = require('./breedFetcher');



const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`;

fetchBreedDescription(breedName, (error, desc) => {

  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }

})

request(url, (err, response, body) => {
  if (err) {console.log('Error: ', err)}
  if (body === '[]') {console.log('Breed not found.')}
  else {
    console.log(body);
    const data = JSON.parse(body);
    console.log(typeof data);
    console.log(data[0].description);
  }
})