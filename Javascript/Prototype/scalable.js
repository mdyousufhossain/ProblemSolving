function createingText(newText){
    const CatFact = document.getElementById('catFact')
  
   return CatFact.innerText = newText

}
const Matrix = []


async function getData() {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const datas = await response.json();
      const data = datas.fact 
      createingText(data)
        
    } 
    
    catch (error) {
      console.error(error);
    }
}


  


