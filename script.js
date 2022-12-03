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
  function convertDateToStr(date) {
    var dateStr = { day: '', month: '', year: '' };
    if (date.day < 10) {
      dateStr.day = '0' + date.day;
    }
    else {
      dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
      dateStr.month = '0' + date.month;
    }
    else {
      dateStr.month = date.month.toString();
    }
  
    dateStr.year = date.year.toString();
    return dateStr;
  }

  function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);//to get last 2 digits
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    //returning in array
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }
  var date = {
    day: 5,
    month: 9,
    year: 2020
  };
  console.log(getAllDateFormats(date))
