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
} 

DOMselectors.inside.insertAdjacentText('beforeend',data2)
 catch (error){
    error } } 
  getdata(WorderPull) 

// something is wrong with do selctor

