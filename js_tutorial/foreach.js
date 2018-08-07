let a = ["ant", "bat", "42"];
a.forEach(function(element) {
    console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
    console.log(character);
});

//quick comparison a.sort(function(a, b) {return a - b});