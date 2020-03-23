module.exports = function toReadable (number) {
  const numbers = {
      "0": "zero",
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
      "10": "ten",
      "11": "eleven",
      "12": "twelve",
      "13": "thirteen",
      "14": "fourteen",
      "15": "fifteen",
      "16": "sixteen",
      "17": "seventeen",
      "18": "eighteen",
      "19": "nineteen",
      "20": "twenty",
      "30": "thirty",
      "40": "forty",
      "50": "fifty",
      "60": "sixty",
      "70": "seventy",
      "80": "eighty",
      "90": "ninety"
  };

  if(number.toString() in numbers) {
      return numbers[number.toString()];
  }

  numbers["100"] = "hundred";

  const aye = [];
  while(number > 10) {
    if(number >= 100) {
        aye.push({"100": Math.floor(number/100)});
        number %= 100;
    }
    if(number >= 10) {
        aye.push({"10": Math.floor(number/10)});
        number %= 10;
    }
  }
  
  let ans = "";
  aye.forEach(e => {
      let key = Object.keys(e)[0];
      let times = e[key];
      if(key === "100") {
        ans += `${numbers[times.toString()]} ${numbers["100"]} `;
      } else {
        let part = key*times + number;
        let s = numbers[part.toString()];
        
        if(s !== undefined) {
            ans += s;
            number = 0;
        } else {
            part -= number;
            ans += `${numbers[part.toString()]} `;
        }
      }
  });

  return number > 0 ? ans + numbers[number.toString()] : ans.replace(/\s{1}$/g, "");
}
