const WorderPull = "https://random-word-api.herokuapp.com/word"
const DOMselectors = {

  word: document.getElementById("RANWord")
} 

async function getdata(url) { 
  try {
    const repsonce = await fetch(url); 
    if (repsonce.status != 200) {
      throw new Error(repsonce.statusText) 
     } 
 let data2 = await repsonce.json()
console.log(data2)
console.log("HI")
    }

catch (error){
  error }

DOMselectors.word.insertAdjacentText('beforeend',data2)

} 

getdata(WorderPull)



 console.log("this doesnt work")
