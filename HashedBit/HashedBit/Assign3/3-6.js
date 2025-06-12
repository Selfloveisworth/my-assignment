//answer 3
//Repalce 'INDIA' with 'IND0NESIA' using splice

let string = 'INDIA'.split('');
string.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');

let output = string.join('');
console.log(output);

//answer4
//counts vowels and consonant in the string

let sentence = "Javascript is a powerful language";
let vowels = "aeiouAEIOU";
let vCount = 0, cCount = 0;

for (let char of sentence) {
  if (/[a-zA-Z]/.test(char)) {
    if (vowels.includes(char)) {
      vCount++;
    } else {
      cCount++;
    }
  }
}

console.log("Vowels:", vCount);
console.log("Consonants:", cCount);

//answer5
//Replace wrong word with correct one

function correctFn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctFn("I lvoe India", "lvoe", "love"));


//answer6
//filter number greater than 5

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = inputArr.filter(num => num > 5);

console.log(result); 