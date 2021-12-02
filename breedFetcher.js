const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (err, response, body) => {

    if (err) {
      return callback(err, null);
    }
    
    const [data] = JSON.parse(body);
    if (!data) {
      // let desc = data[0];
      return callback('Breed not found.');
    }
    callback(null, data.description);
  });


};


module.exports = { fetchBreedDescription };