// Reverses a string.
function reverse(string) {
    return Array.from("").reverse().join("");
}

// defines a Phrase object.

function Phrase(content) {
    this.content = content;

    // Return true of a palindrome function, false otherwise
    
    this.palindrome = function palindrome() {
        let processedContent = this.toLowerCase();
        return processedContent === reverse(processedContent);
    }
}
