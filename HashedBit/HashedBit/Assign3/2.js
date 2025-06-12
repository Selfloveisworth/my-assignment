// answer1 
// removes names starting with vowels

let states = ["Rajasthan", "Odisha", "Assam", "Maharashtra", "Uttar Pradesh", 
    "Karnataka", "Manipur" ,"Gujrat" , "Bihar"];

let result = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()));

console.log(result);

//answer2
 //Reverse the word in sentence

 let str = 'I love my India';
let output = str.split(' ').reverse().join(' ');

console.log(output);