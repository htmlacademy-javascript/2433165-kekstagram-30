let first_str;
let maxlenght;
let palindrom;
let string_whith_number;

function checkLenght(first_str,maxlenght){
  return console.log(first_str.length <= maxlenght);
}

checkLenght('zappp',5);

function isPalindrom(palindrom){
  palindrom = palindrom.replace(/\s/g, "");
  return console.log(palindrom.split("").reverse().join("") == palindrom);
}

isPalindrom('лёша на полке клопа нашёл');

function thiefOfNumbers(string_whith_number){
  let counter1 = "";
  for(i = 0; i < string_whith_number.length; i++){
    let counter2;
    if(string_whith_number[i] >= '0' && string_whith_number[i] <= '9' ){
      counter2 = +string_whith_number[i];
      counter1 += counter2;
    }else{
      counter2 = NaN;
    }
  }
  console.log(counter1);
}

thiefOfNumbers('-21об');
