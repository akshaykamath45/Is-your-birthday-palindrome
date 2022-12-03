function reverseStr(str) {
    var listOfChars = str.split('');//['h','e','l','l','o']
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('' );
    return reversedStr;
    // return str.split('').reverse().join();
  }
  

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

  function checkPalindromeForAllDAteFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;
    for (var i = 0; i < listOfPalindromes.length; i++) {
      if (isPalindrome(listOfPalindromes[i])) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  function getNextDate(date) {
    var day = date.day + 1;//incrementing the day
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 2) {//check for leap year,feb month
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month++;
        }
      }
      else {
        if (day > 28) {//normal condition
          day = 1;
          month++;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) { //-1,since indexing starting from 0,so adjusting.Check if the day exceeds the max days in the month.
        day = 1;
        month++;
      }//month changes,hence increasing.
    }
    if (month > 12) {
      month = 1;
      year++;
    }
    return {
      day: day,
      month: month,
      year: year
    };
  }
  
  var date = {
    day: 2,
    month: 11,
    year: 2020
  };
  // console.log(getAllDateFormats(date))
  console.log(checkPalindromeForAllDAteFormats(date));
  console.log(getNextDate(date));
