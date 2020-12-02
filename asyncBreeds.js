const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunction) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if(!error) callbackFunction(data);
    if(error) callbackFunction(undefined)
  });
};


const printOutCatBreed = breed => {
  console.log("Return Value: ", breed)
};

breedDetailsFromFile("Bombay", printOutCatBreed);

module.exports = breedDetailsFromFile;