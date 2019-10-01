module.exports = function check(str, bracketsConfig) {
  //Special case with no brackets

  let bracketsPairs = bracketsConfig.length;

  // storing all types of opening and closing brackets
  let openings = [];
  let closings = [];
  let same = [];
  for (let i = 0; i < bracketsPairs; i++) {
    openings.push(bracketsConfig[i][0]);
    closings.push(bracketsConfig[i][1]);
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      same.push(bracketsConfig[i][0]);
    }
  }

  // iterate through the string
  let bracketsTotal = str.length;
  let allOpened = [];
  for (let j = 0; j < bracketsTotal; j++) {
    if (same.includes(str[j])) {
      if (allOpened[allOpened.length - 1] === same[same.indexOf(str[j])]) {
        allOpened.pop();
      }
      else {
        allOpened.push(str[j]);
      }
    }
    else if (openings.includes(str[j])) {
      allOpened.push(str[j]);
    }
    else {
      if (!closings.includes(str[j])) return true;
      // if it is a pair with the last opened bracket
      else if (str[j] === closings[openings.indexOf(allOpened[allOpened.length - 1])]) {
        allOpened.pop();
      }
      else return false;
    }
  }
  return allOpened.length === 0 ? true : false; 
}
