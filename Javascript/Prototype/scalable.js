
function createingText(newText,element){
    let createTxt = document.createElement(element)
    document.body.appendChild(createTxt)
    
   return createTxt.innerText = newText

}


fetch('https://catfact.ninja/facts')
  .then(response => response.json())
  
  .then(fact => console.log(fact.data))

  .catch(error => console.error(error));


