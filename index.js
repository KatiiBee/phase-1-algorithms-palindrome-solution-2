function isPalindrome(word) {
  // itterate from the beginning of the string to the middle
  for (let startIndex=0; startIndex<word.length/2; startIndex ++){
    //compare the letter we are itterating over to the corresponding letter at the end of the string
    const endIndex=word.length -1 -startIndex;
    if (word[startIndex]!== word[endIndex])
    return false; 
    //if the letters dont match, return false
  }return true;
  //if we reach the middle and all the letters match return true
}

/* 
  Add your pseudocode here
*/
//iterate from the beginning of the string to the middle of the string
//compare the letter we are iterating over to the corresponding letter at the end of the string
//if the letter don't match return false
//if we reach the middle and all the letter match return true

/*
  Add written explanation of your solution here
*/
//is the first letter the same as the last letter and is the second letter the same as the second to last letter

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("amma"));
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("hi"));
  console.log("=>", isPalindrome("sun"));
}

module.exports = isPalindrome;
