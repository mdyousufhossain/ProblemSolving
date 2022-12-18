// function creatingElemet(type){
//   const elm = document.createElement(type)
//   elm.innerText = "its loading"
// }


// Updating h1 in dom 
function createingText(newText){
    const CatFact = document.getElementById('catFact')

   return CatFact.innerText = newText

}
// Making elemet and hidden/display
function MakingElVisible(StyleAttr,el){
  let gettingCats = document.getElementById(el);

  return gettingCats.style.display = StyleAttr ;

}



async function getData() {
   MakingElVisible("block","invisible")
   MakingElVisible("none","SleepingCats")
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const datas = await response.json();
      const data = datas.fact
      MakingElVisible("none","invisible")
      MakingElVisible("block","SleepingCats")
      createingText(data)

    } 
    
    catch (error) {
      console.error(error);
    }
}


  


