/*
Ankademin söker utvecklare!

Rektor Sofia på Ankademin har fått klagomål från sina anställda att de har för mycket pappersarbete. Sofia är villig att betala 1,2 miljoner kronor(!) till ett team av utvecklare för att underlätta lärarnas liv genom att automatisera ett antal processer.

*Mattelärarna Emelie och Nanthiporn är trötta på att rätta prov. De har efterfrågat en funktion som tar emot tre argument - namn på elev, elevens poäng, och maxpoäng för provet. Om antal poäng är över 50% av maxpoäng, skriv ut i konsolen “ NAMN är godkänd.” Annars skriv ut “NAMN är underkänd” (NAMN = elevens namn).
*/

function gradeStudent(name, points, maxPoints) {
  return points >= maxPoints * 0.5 ? `${name} är godkänd.` : `${name} är underkänd.`

  //alt.
  /*
  if (points >= maxPoints * 0.5) {
    return name + " är godkänd."
  }
  else {
    return name + " är underkänd."
  }
  */
}

console.log(gradeStudent("Henrik", 26, 50));
console.log(gradeStudent("Henrik", 24, 50));
console.log(gradeStudent("Henrik", 25, 50));

/*
*Biologilärarna William och Leo vill också ha en liknande funktion, men de önskar ha tydligare betygsättning. Om eleven har över 50% rätt ska de ha betyget E, om de har över 75% ska de få betyget C, och om de har över 95% rätt ska de få betyget A. Om de får under 50% ska de få icke-godkänt (F).
*/

function gradeStudentFancy(name, points, maxPoints) {
  return points >= maxPoints * 0.95 ? `${name} får betyg A.` :
         points >= maxPoints * 0.75 ? `${name} får betyg C.` :
         points >= maxPoints * 0.50 ? `${name} får betyg E.` : `${name} får betyg F.`
}

//alt. if, else if, else if, else

console.log(gradeStudentFancy("Henrik", 48, 50));
console.log(gradeStudentFancy("Henrik", 40, 50));
console.log(gradeStudentFancy("Henrik", 26, 50));
console.log(gradeStudentFancy("Henrik", 24, 50));

/*
*(Svår) IT-lärarna Linar och Pavel tycker om att se hur deras klasser presterar som grupp. Deras prov har alltid 100 som max antal poäng, så de vill ha en funktion som tar in en array med olika poäng, och returnerar en text med hur många som fått betygen A,C,E samt F (enligt ovanstående betygskriterier).
*/
let myPointArray = [100, 82, 67, 24, 97, 86, 57, 69, 78, 80];

function howManyDifferentGrades(arrPoints) {
  let gradeA = 0, gradeC = 0, gradeE = 0, gradeF = 0; //tvungen att ha = 0 för att tolkas som numbers senare

  function gradeStudentLocal(points) {
    let maxpoints = 100;
    return points >= maxpoints * 0.95 ? `A` :
           points >= maxpoints * 0.75 ? `C` :
           points >= maxpoints * 0.50 ? `E` : `F`
  }

  for (let i = 0; i < arrPoints.length; i++) {
    if (gradeStudentLocal(arrPoints[i]) === "A") {
      gradeA += 1;
      //alt gradeA++;
    }
    else if (gradeStudentLocal(arrPoints[i]) === "C") {
      gradeC += 1;
    }
    else if (gradeStudentLocal(arrPoints[i]) === "E") {
      gradeE += 1;
    }
    else {
      gradeF += 1;
    } 
  }
  return `${gradeA} fick betyg A. ${gradeC} fick betyg C. ${gradeE} fick betyg E. ${gradeF} fick betyg F. `
}

console.log(howManyDifferentGrades(myPointArray));

/*
*Ekonomilärarna Emma och Hampus undervisar i företagsekonomi, och lär deras elever hur man gör en balansrapport med hjälp av debet och kredit. För att se om siffrorna stämmer, vill de gärna ha en funktion som tar in två siffror som argument - debet och kredit - och ser om dessa är lika stora. Om de är lika stora, skriv ut i konsolen att dessa är lika stora. Om debet är större än kredit, skriv ut att så är fallet. Om kredit är större, ska detta skrivas ut istället.
*/

function compareDebitCredit(debit, credit) {
  return debit > credit ? `debet är större.` :
         credit > debit ? `kredit är större.` :
         debit === credit ? `debet och kredit är lika stora.` : "input error"
}

console.log(compareDebitCredit(100, 200));
console.log(compareDebitCredit(300, 200));
console.log(compareDebitCredit(200, 200));

/*

*(Svår) Anna och Sofie är chefer på företaget Quiz Champions AB, och önskar köpa in funktionen från uppgift 2 till deras företag. Dock har de en massor av kostnader och tillgångar, så funktionen behöver bli lite mer komplex. Istället för två siffror, ta in två arrayer som argument - en array för debet och en array för kredit. Räkna ut den totala summan av dessa arrays. Om summan för bägge arrays är likadana, skriv ut “Balansrapport godkänd”, annars skriv ut “Debet och kredit har inte samma värden.”
*/
let myDebitArray = [];
let myCreditArray = [];
myDebitArray = [100, 200, 300];
myCreditArray = [100, 200, 300];
//myCreditArray = [100, 200, 300, 400];

function compareDebitCreditFancy(arrDebit, arrCredit) {
  let debit = 0; credit = 0;
  for (let i = 0; i < arrDebit.length; i++) {
    debit += arrDebit[i];
  }
  for (let i = 0; i < arrCredit.length; i++) {
    credit += arrCredit[i];
  }
  
  return debit === credit ? `Balansrapport godkänd.` : `Debet och kredit har inte samma värden.`
}

console.log(compareDebitCreditFancy(myDebitArray, myCreditArray));


/*
*Systemadministratörer Stina och Viktoria har blivit efterfrågade att skicka data om skolan till möjliga sponsorer. Skapa upp en variabel som du definierar som ett objekt innehållandes följande information på engelska:
!Namn: Ankademin
!Antal elever: 38
!Antal lärare: 10
!Skolans motto: Anyone can code!
!Favoritlärare: Brandon
!Är Sveriges bästa skola: sant
!Hundvänlig: sant
!Ormvänlig: falskt
!Lista på locations = Solna, Ankeborg, Duckville(array)
!Maskot = Namn: Miles, ålder: 1, är söt: true (objekt)
*/

let myObject = {
  name : "Ankademin",
  studentCount : 38,
  teacherCount : 10,
  motto : "Anyone can code!",
  favoriteTeacher : "Brandon",
  isSwedensBestSchool : false,
  isDogFriendly : true,
  isSnakeFriendly : false,
  locationList : ["Solna", "Ankeborg", "Duckville",],
  mascot : {
    name : "Miles",
    age : 1,
    isCute : true,
  }
};

function logObject(inObject) {
  for (const key in inObject) {
    if (Object.hasOwnProperty.call(inObject, key)) {
      if (typeof inObject[key] === "object") {
        let nestedKey = Object.keys(inObject[key]);
        let nestedValue = Object.values(inObject[key]);
        console.log(`nestedObject = ${key}`);   
        for (let i = 0; i < Object.keys(inObject[key]).length; i++) {
          console.log(`nestedKey = ${nestedKey[i]} and nestedValue = ${nestedValue[i]}`);   
          }
        }
      else {
        console.log(`key = ${key} and value = ${inObject[key]}`);
      }
    }
  }
  return true
}

logObject(myObject); 

/*
*Föräldrarna Ludvig, Lukas, Noah och Saga efterfrågar information om skolan, för att avgöra om de ska placera sina barn där. Skapa en funktion som heter sendSchoolInfo som tar in ett objekt, och skriver ut ett meddelande i konsolen med skolans namn, antalet lärare och antalet elever. OM skolan inte är ormvänligt ska även ett meddelande skrivas ut för detta (annars skriv ej ut något). OM det är världens bästa skola ska det även skrivas ut ett meddelande där det står “This is the best school in Sweden!” annars skriv ut ett meddelande där det står “It’s not the best school in Sweden, but still good!”
*/

function sendSchoolInfo(object) {
  return `Skolans namn är ${object.name} och har ${object.teacherCount} lärare samt ${object.studentCount} elever.${object.isSnakeFriendly ? "" : " Notera att skolan ej är ormvänlig."}${object.isSwedensBestSchool ? " This is the best school in Sweden!" : " It's not the best school in Sweden, but still good!"}`;
}

console.log(sendSchoolInfo(myObject));

/*
*Investerarna Hampus och Olivia efterfrågar information om skolans maskot, för att avgöra om de vill sponsra skolans e-sportlag. Skapa en funktion som heter sendMascotInfo som tar in ett objekt. Den ska skriva ut objektets namn och ålder i konsolen. OM maskoten är söt, skriv även ut detta i konsolen. (Om maskoten inte är söt, ska inget mer skrivas ut.) Kör funktionen och skicka med maskot-objektet inuti skol-objektet som argument.
*/

function sendMascotInfo(object) {
  return `Maskoten heter ${object.name} och är ${object.age} år gammal.${object.isCute ? " Maskoten är söt!" : ""}`
}
console.log(sendMascotInfo(myObject.mascot));

/*
*Överkurs

*(Svår) Gympalärarna Tobias och Sebastian önskar en funktion för att singla slant när eleverna spelar fotboll på idrottslektionerna, för att bestämma vilket lag som börjar med boll. Gör en funktion som slumpar fram krona eller klave i konsolen (sannolikheten ska vara 50% för bägge scenarios).
*/

function headsOrTails() {
  let result = Math.random();
  return result < 0.5 ? `${result} = Tails!` : `${result} = Heads!`
}

console.log(headsOrTails());


//LYCKA TILL!!