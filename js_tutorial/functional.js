let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// [1, 2, 3, 4].map(function(n) { return n * n });
// [1, 2, 3, 4].map( (n) => { return n * n });
// [1, 2, 3, 4].map(n  =>  n * n ); fastest way of using map

function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));
