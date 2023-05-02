const request = require('request');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What breed of cat would you like to know more about? ', (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(`API returned status code ${response.statusCode}`);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`No results found for ${breed}`)
    } else {
    console.log(data[0].description)
    };
  }
  rl.close();
  });
});
