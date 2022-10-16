Extra-uppgifter
Här hitta ni lite uppgifter ni kan göra om ni skulle bli klara med övningsuppgifter som delats ut hittills, eller om ni helt enkelt bara vill testa er problemlösningsförmåga!


Javascript - Samling av övningar


Övning 1 (objekt, funktioner)

*Skriv en funktion som tar emot en array av objekt med elever samt deras betyg och skriver ut samtlig data. Objektet kan vara vilket som helst, men här är ett exempel:

let student = {

    name : "Jessica",

    age : 44,

    grade : "VG"

};


Utskrift: name,age,grade


Övning 2 (funktioner, if/else, Date-objekt)


*Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.


Övning 3 (function, callbacks, if/else)


*Create a function. Your function will be passed two functions, f and g,that don't take any parameters and simply returns a number . Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.

If g returns the larger number, return the string g.

If the functions return the same number, return the string neither.


Övning 4 (funktioner,algoritmer, string methods)


*Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Numbers with two identical digits should yield true (you can't do better).



Övning 5 (loopar, strängar)

*Create a function that takes a letter and a sentence as arguments. Return the number of times the letter (the single character) is found in the sentence.



Övning 6 (arrayer, array metoder)

*Skriv en funktion som tar emot två arrayer och returnerar en ny array som innehåller de värden som arrayerna har gemensamt.

Övning 7 (DOM, funktioner, event listeners)

*Gör en webbsida med en textrad, ett värde och en knapp, såhär:


Tärning 1: <span id="dice_1">3</span>

[Slå tärning] ← Knapp


*1.1. Gör så att tärningen får ett nytt slumpat värde mellan 1 och 6 när användaren trycker på knappen.

*1.2. Lägg nu till ett par tärningar till (totalt tre tärningar) och se till att de fungerar likadant, en knapp per tärning som ger tärningen ett nytt värde.

*1.3. Ta nu bort alla knappar utom en och se till att alla tärningar får ett nytt värde när du klickar på knappen.

*1.4. Skriv ut det totala värdet för samtliga tärningar i DOM:en.

*1.5. Skriv ut texten “Highest score:” i DOM:en som uppdateras varje gång användaren slår ett nytt rekord med tärningarna. 


Övning 8


*A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

*The wanted word is in lowercase.

*The crowd of letters is all in uppercase.

*Note that the word will be spread out amongst the random letters, but their letters remain in the same order.


T.ex

detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"



Övning 9 (Arrayer, objekt)


?You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.


Assume that the following array of drink objects needs to be sorted:


drinks = [

  {name: "lemonade", price: 50},

  {name: "lime", price: 10}

]

The output of the sorted drinks object will be:


Examples

sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

