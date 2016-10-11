// Main JavaScript File

// String variable
var str = "this is a sentence";

// Use the length property to see how many characters are in your `str` variable
console.log(str.length);
// Use the `toUpperCase` method to create a new variable `STR` that has the `str` value, but all UPPPERCASE.
var STR = str.toUpperCase();
console.log(STR);
// Use the "split" method create a new variable `words` that is an array of the component words of `str`
var words = str.split();
console.log(words);
// Use the length property to see how many words are in your `words` array
console.log(words.length);
// Write a function that returns the number of words in a string
var numWords = function(wordString){
	var num = wordString.split(" ");
	return num.length;
}
// Pass a string to your function to determine that it works
console.log(numWords("Hello my name is Jenna"));

// Write a function to test if a string contains a word, and returns a boolean value.
var hasWord = function(wordString){
	return (numWords(wordString) >= 1);
}

// Pass a phrase and a string to your function to determine that it works
console.log(hasWords("Yo"));
