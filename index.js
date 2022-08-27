






function isPalindrome(word) {
 for (let i =0; i< word.length; i+= 1) {
  if( word[i] !== word[word.length-1-i]) 
  return false
 }
  return true
  
  
}

/* 
  Add your pseudocode here
  If the word is the same as in reverse I should return true 
  - reverse the input string 
  If the input is the same as the reverse input return true else return false 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // did === did output: true
  // clock=== kcolc output: false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
