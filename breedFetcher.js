const request = require('request');
const arg = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`;


const breedFetcher = () => {

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

}

breedFetcher();

module.exports = { breedFeatcher };