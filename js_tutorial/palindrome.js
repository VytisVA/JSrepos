// Reverses a string.
function reverse(string) {
    return Array.from("").reverse().join("");
}

// Return true of a palindrome function, false otherwise

function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}