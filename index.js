function isPalindrome(word) {
  let result = word.split('');
  result = result.reverse();
  result = result.join('');
  if(result === word){
    return true;
  }
  else{ return false};
  // Write your algorithm here
}

/* 
   Add your pseudocode here
   turn the string into an array using split method and saving to variable
   use the reverse method on the array
   join the array
   compare the original word with reversed word
   if they are similar print out true, if not print out false
*/

/*
  Add written explanation of your solution here
  We first create a new array by splitting the inputted word into individual characters.
  We then reverse the character placement of the inputted word in the array.
  Finally we join all the elements within the array back together into one single string.
  If this newly created string matches the original word, it returns true meaning that the word is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
