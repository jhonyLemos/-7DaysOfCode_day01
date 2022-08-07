let numUm = 1;
let stringUm = "1";
let numTrinta = 30;
let stringTrinta = "30";
let numDez = 10;
let stringDez = "10";

if (numUm !== stringUm) {
  console.log(`valor das variaveis sao iguais!    
     ${numUm} | ${stringUm}, mas teus tipos sao diferentes = ${typeof numUm} | ${typeof stringUm}`);
} else {
  console.log(`Essas variaveis nao tem o mesmo valor`);
}

if (numTrinta === stringTrinta) {
  console.log(
    `Essas variaveis tem o mesmo valor e o mesmo tipo ${numTrinta} | ${stringTrinta}`
  );
} else {
  console.log("Essas variaveis nao tem o mesmo tipo!");
}

if (numDez !== stringDez) {
  console.log(
    `Essas variaveis tem o mesmo valor mas tipos diferentes (${typeof numDez} | ${typeof stringDez})`
  );
} else {
  console.log(`Essas variaveis nao tem o mesmo valor!`);
}
