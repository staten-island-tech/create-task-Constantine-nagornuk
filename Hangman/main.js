


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
  'poop',
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
  'timber',
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


let attempts1 = []
let attempts2 = []
let correctGuessesPlaceholder = Array(selected_word.length).fill('-'); // Placeholder array for correct guesses


function showletter() {  
let letter_choice = prompt('Choose a letter')
if (guesses > 0 ){
if (selected_word.includes(letter_choice)) {
  console.log('You Guess Correct');
  DOMSELECTORS.lol.innerHTML = '';
  DOMSELECTORS.lol.innerHTML = 'You Guess Correct';
  attempts1.push(letter_choice)
  selected_word.split('').forEach((letter, index) => {
    if (letter === letter_choice) correctGuessesPlaceholder[index] = letter;
  });
}
 else {
  console.log('Incorrect guess/Not valid guess type');
  DOMSELECTORS.lol.innerHTML = '';
  DOMSELECTORS.lol.innerHTML = 'You Guess Incorrect';
  attempts2.push(letter_choice)
} 
  console.log(correctGuessesPlaceholder.join(''));
  }
}


const DOMSELECTORS = {
  Button1 : document.getElementById("Guess"),
  Button2 : document.getElementById("RESET"),
  lol: document.getElementById("GuessType"),
  gog: document.getElementById("Length1"),
  poop: document.getElementById('Guessmany'),
  wordL: document.getElementById('WordLength')
}

DOMSELECTORS.wordL.innerHTML = correctGuessesPlaceholder
let guesses = 15
DOMSELECTORS.poop.innerHTML ='You have ' + guesses + '  guesses left'


DOMSELECTORS.Button1.addEventListener("click" , TakeAGUESS)
function TakeAGUESS(){
if (guesses <= 0){
  DOMSELECTORS.poop.innerHTML=guesses
  console.log("game over")
  console.log("these are all your correct guesses" , attempts1)
  console.log("these are all your incorrect guesses" , attempts2)
  }
else if(guesses > 0){
  
  guesses -= 1
  DOMSELECTORS.poop.innerHTML=guesses
  // fix this to be same as other one
  showletter()
  console.log(guesses)
}

}

DOMSELECTORS.Button2.addEventListener("click", Reset1)
function Reset1(){
  
guesses = 15
DOMSELECTORS.poop.innerHTML=guesses
DOMSELECTORS.lol.innerHTML = '';
DOMSELECTORS.lol.innerHTML = 'No Guess yet';
random_num = Math.floor(Math.random() * 100)
selected_word = words[random_num]
correctGuessesPlaceholder = Array(selected_word.length).fill('-'); 
  attempts1 = []; 
  attempts2 = [];
}


const length2 = selected_word.length
DOMSELECTORS.gog.innerHTML= 'Length of your word: '+ length2




