const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      console.error(`API returned status code ${response.statusCode}`);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(true, null);
        console.log(`No results found for ${breedName}`);
      } else {
        callback(null, data[0].description);
        console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };