function reverseStr(str) {
    var listOfChars = str.split('');//['h','e','l','l','o']
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join();
    return reversedStr;
    // return str.split('').reverse().join();
  }
  console.log(reverseStr("Hello"));