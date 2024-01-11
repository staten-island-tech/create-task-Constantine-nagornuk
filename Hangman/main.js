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
    
     const data2 = await repsonce.json()
console.log(data2)

    }

catch (error){
  error }



} 

getdata(WorderPull)





