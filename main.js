// Create start button
// once button is click, display cards facing down and start button dissappears.
// select a single card first. CHECK
// once selected, reveal whats on the other side CHECK
// after select another card. CHECK
// if the two selected cards are the same, keep them upward. if not, turn it back around
// continue selecting cards until they all match. 
// check if all cards are upward and matched.
// notify user when game is won
// if the user want to play again, cards must be randomized and hidden.

let firstDiv = 'undefined'
let secondDiv = 'undefined'

let divs =Array.from(document.querySelectorAll('div'))
console.log(divs) //we created a variable name playGame and we are querySelecting div from the doc and turning it into an array with Array.from method

 divs.forEach((element,index) =>{
   element.addEventListener('click',() =>{
    // we used a for each loop to travel each event of the array and created addEventListener 'click'.
    if(firstDiv === secondDiv){
      firstDiv = element
    }else{
      secondDiv = element
      checkingMatch(firstDiv,secondDiv)
    }
     
      
    
     console.log(element)
    element.querySelector('img').classList.toggle('hidden')  
   })
 }) 
 
  const BBimages = ['imageOne','imageTwo','imageThree','imageFour','imageFive', 'imageSix','imageOne','imageTwo','imageThree','imageFour','imageFive', 'imageSix']



 function shuffle(array) {
  let currentIndex = array.length,  randomIndex; //???

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
      // ^^ definitely look into it
  }

  return array;
}
//call shuffle function
shuffle(BBimages)
// Used like so
console.log(BBimages);


function checkingMatch(firstDiv,secondDiv){
console.log(firstDiv)
  let firstImage = firstDiv.querySelector('img')
   
  let secondImage = secondDiv.querySelector('img')

  //console.log(secondImage)

  //console.log(secondImage.src)
  //console.log(firstImage)
  console.log(secondDiv)
}




