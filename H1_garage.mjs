import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const autoGarage = {
    naam: "Mijn Garage",
    autos: [
      { merk: "Toyota", bouwjaar: 2010 },
      { merk: "Honda", bouwjaar: 2015 },
      { merk: "Ford", bouwjaar: 2018 }
    ],
    vervangAuto: function(oudeAutoIndex, nieuweAuto) {
      if (oudeAutoIndex >= 0 && oudeAutoIndex < this.autos.length) {
        this.autos[oudeAutoIndex] = nieuweAuto;
        console.log(`Auto op positie ${oudeAutoIndex} is vervangen.`);
      } else {
        console.log("Ongeldig indexnummer.");
      }
    }
  };
  
  const nieuweAuto = { merk: "BMW", bouwjaar: 2022 };
  autoGarage.vervangAuto(1, nieuweAuto);
  
  console.log(autoGarage.autos);
  

process.exit()