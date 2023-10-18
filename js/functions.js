function checkLenght(first_str,maxlenght){
  return first_str.length <= maxlenght;
}

checkLenght('zappp',5);

function isPalindrom(palindrom){
  palindrom = palindrom.replace(/\s/g, "");
  return palindrom.split("").reverse().join("") == palindrom;
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
