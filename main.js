// 1
let a = prompt("Istalgan son kiriting");
let b = prompt("Istalgan son kiriting");

let c = (a * b);
console.log(c);

// 2
let d = Number("12");
alert(typeof(d));

// 3
let random = Math.trunc(101 * Math.random());
alert(random)

if (random % 2 == 0) {
    alert("Bu son juft")
}else{
    alert("Bu son toq")
}

// 4
var userInput = prompt("Istalgan so'z yazing");

if (userInput === "Mars") {
    console.log(userInput);
} else {
    console.log("Mars It school");
}

// 5
let array = prompt("5 ta soz kiriting");
let longWordsArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
        longWordsArray.push(array[i]);
    }
}

console.log("Uzunligi 5 va 5 dan ortiq sozlar:", longWordsArray);

6

let juftsonlar = [];
let toqsonlar = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        juftsonlar.push(i);
    } else {
        toqsonlar.push(i); 
    }
}

console.log("Juft sonlar", juftsonlar);
console.log("Toq sonlar", toqsonlar);
