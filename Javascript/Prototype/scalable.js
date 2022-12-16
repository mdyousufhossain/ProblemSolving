
function createingText(newText,element){
    let createTxt = document.createElement(element)
    document.body.appendChild(createTxt)
    
   return createTxt.innerText = newText

}



  async function getData(n) {
    try {
      const response = await fetch('https://catfact.ninja/facts');
      const datas = await response.json();
      const facts = datas.data[n]
      console.log(facts)
      createingText(facts.fact,"h1")

    } catch (error) {
      console.error(error);
    }
  }

getData(9)
  


