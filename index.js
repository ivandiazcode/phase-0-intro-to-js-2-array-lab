// Write your solution here!
let cats = ['Milo','Otis','Garfield']

beforeEach(function() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(name) { 
    cats.push(name)
}

destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

destructivelyPrependCat('bob');

function destructivelyRemoveLastCat() {
    cats.pop()
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

destructivelyRemoveFirstCat();



function appendCat(name) {
   const newCats = cats.slice();
   newCats.push(name)
   return newCats;
}

appendCat('Broom')

function prependCat(name) {
    const newCats = cats.slice();
    newCats.unshift(name)
    return newCats;
}

prependCat('Arnold')

function removeLastCat(name) {
    const newCats = cats.slice()
    newCats.pop(name)  
    return newCats;
}

removeLastCat();

function removeFirstCat(name) {
    const newCats = cats.slice()
    newCats.shift(name)
    return newCats;
} 

removeFirstCat()