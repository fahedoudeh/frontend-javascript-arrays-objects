// ==========================================
// 1. Declareer een variabele en sla daar een array met vier  (zoals 2021) in op. Log dit in de terminal.
// ==========================================
const years = [2022, 1866, 2006, 2018, 2019, 2021, 2023, 2025]
console.log(years)

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================
const hobbies = ['swimming', 'fietsen', 'paard rijden']
console.log(hobbies)
// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================
const numbers = [3, 4, 5, 7, 2]
console.log(numbers[0])

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================
const colors = ['groen', 'geel', 'rood', 'paars', 'blauw', 'oranje']
console.log(colors[4])
console.log(colors[1])
// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
const numbers1 = [21, 22, 23, 25, 25]
numbers1[3] = 24
console.log(numbers1)

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
const ingreds = ['bladerdeeg', 'knoflook', 'spinazie']
ingreds[0] = 'lasagne bladen'
console.log(ingreds)
ingredsLenghth = ingreds.length
console.log(ingredsLenghth)