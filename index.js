const { fetchBreedDescription } = require('./breedFetcher');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What breed of cat would you like to know more about? ', (breedName) => {
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });
  rl.close();
});
 