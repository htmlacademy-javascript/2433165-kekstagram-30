function checkLenght(firstStr,maxLenght){
  return firstStr.length <= maxLenght;
}

checkLenght('zappp',5);

function isPalindrom(palindrom){
  const string = palindrom.replaceAll(' ','').toLoverCase();
  for(let i = 0; i < string.length / 2; i++){
    if(string.at(i) !== string.at(-i,-1)){
      return false;
    }
  }
  return true;
}

isPalindrom('лёша на полке клопа нашёл');

function stealANumber(stringWhithNumber) {
  let counter1 = "";
  for (i = 0; i < stringWhithNumber.length; i++) {
    if (stringWhithNumber[i] >= '0' && stringWhithNumber[i] <= '9') {
      counter1 += +stringWhithNumber[i];
    }
  }
  console.log(counter1);
}

stealANumber('агент 007');
