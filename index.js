//define the cats as an empty array
var cats = ["Milo", "Otis", "Garfield"]

// Append a cat to the end of the cats array
function destructivelyAppendCat(catName) {
    cats.push(catName);
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

//Remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop()
}

// Remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(catName) {
    var newCats = [...cats, catName];
    return newCats;
}

// Prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(catName) {
    var newCats = [catName, ...cats];
    return newCats;
}

// Remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
    var newCats = cats.slice(0, -1);
    return newCats;
}

// Remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
    var newCats = cats.slice(1);
    return newCats;
}
