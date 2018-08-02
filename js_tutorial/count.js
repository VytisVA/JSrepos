const sonnet = `Adventure always toy mouse squeak roll over cat is love, cat is life have my breakfast spaghetti yarn yet cat cat moo moo lick ears lick paws.`;

let uniques = {};
let words = sonnet.match(/\w+/g);

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (uniques[word]) {
        uniques[word] += 1;
    } else {
        uniques[word] = 1;
    }
}

console.log(uniques);