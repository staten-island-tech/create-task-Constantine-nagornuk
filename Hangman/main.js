


const words = [
  'statuesque',
  'extend',
  'solid',
  'pine',
  'gather',
  'reminiscent',
  'health',
  'jog',
  'quack',
  'nosy',
  'spade',
  'oil',
  'necessary',
  'wary',
  'count',
  'blow',
  'office',
  'languid',
  'unusual',
  'earthy',
  'messy',
  'nice',
  'cycle',
  'interrupt',
  'uninterested',
  'avoid',
  'aquatic',
  'whimsical',
  'war',
  'rat',
  'superb',
  'sticks',
  'existence',
  'afford',
  'roomy',
  'legal',
  'cats',
  'homeless',
  'ad',
  'snow',
  'resolute',
  'fair',
  'damage',
  'drown',
  'soda',
  'secondhand',
  'yam',
  'ocean',
  'mean',
  'entertain',
  'two',
  'free',
  'hypnotic',
  'pricey',
  'burst',
  'ski',
  'maniacal',
  'erratic',
  'suspend',
  'invent',
  'near',
  'moor',
  'driving',
  'heap',
  'aloof',
  'injure',
  'hill',
  'tempt',
  'blushing',
  'chase',
  'zesty',
  'education',
  'light',
  'mother',
  'labored',
  'volcano',
  'exciting',
  'profit',
  'powerful',
  'cave',
  'dashing',
  'cure',
  'able',
  'imported',
  'scary',
  'erect',
  'foamy',
  'roof',
  'border',
  'legs',
  'park',
  'overrated',
  'flimsy',
  'fortunate',
  'birthday',
  'desert',
  'bang',
  'arch',
  'understood',
  'reign'
]


let random_num = Math.floor(Math.random() * 100)
let selected_word = words[random_num]
console.log(selected_word)




function showletter() {  
const attempts1 = []
const attempts2 = []



let letter_choice = prompt('Choose a letter')
if (guesses > 0 ){



if (selected_word.includes(letter_choice)) {
  console.log('You Guess Correct');
  attempts1.push(letter_choice)
  
  //  2  check to make sure if u guess the word yet
}
 else {
  console.log('Incorrect guess/Not valid guess type');
  
  attempts2.push(letter_choice)
} 
  let displayed_word = selected_word
  .split('')
  .map(letter => (letter === letter_choice ? letter : '-'))
  .join('');
  //  1 need to make it so it keeps it cause right now if you guess correct its goes --a-- but if u guess wrong it resets to ----- and even correct again erases last attempt
  console.log(displayed_word);
  

}



  
}



const DOMSELECTORS = {
  Button1 : document.getElementById("Guess"),
  Button2 : document.getElementById("RESET")
}

let guesses = 6


DOMSELECTORS.Button1.addEventListener("click" , TakeAGUESS)
function TakeAGUESS(){
if (guesses <= 0){
  console.log("game over")
  }
else if(guesses > 0){
  guesses -= 1
  showletter()
  console.log(guesses)
}}

DOMSELECTORS.Button2.addEventListener("click", Reset1)
function Reset1(){
guesses = 6
random_num = Math.floor(Math.random() * 100)
selected_word = words[random_num]

}


// reset button now has full functionality. resets guesses and words
