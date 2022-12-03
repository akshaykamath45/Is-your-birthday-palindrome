function reverseStr(str) {
    var listOfChars = str.split('');//['h','e','l','l','o']
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('' );
    return reversedStr;
    // return str.split('').reverse().join();
  }
  console.log(reverseStr("mom"));

  function isPalindrome(str){
        var reverse=reverseStr(str);
        // if(str === reverse){
        //     return true;
        // }
        // else{ 
        //     return false
        // }
        return str === reverse;
  }

  console.log(isPalindrome("242"));
  console.log(isPalindrome('oppo'));
  console.log(isPalindrome('racecar'));
  console.log(isPalindrome('mom'));
  console.log(isPalindrome('momo'));
