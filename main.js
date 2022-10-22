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
let container = document.querySelector('.container')
let hideGame = true
let divs =Array.from(document.querySelectorAll('div'))
let button = document.querySelector('.restart')
button.addEventListener('click',shuffle)
if(hideGame){
  container.style.display = 'none'
  button.style.display = 'none'
}
console.log(divs) //we created a variable name divs and we are querySelecting div from the doc and turning it into an array with Array.from method
document.querySelector('.startGame').addEventListener('click',(e) =>{
  container.style.display = 'grid'
  hideGame = false
  e.target.style.display ='none'
  button.style.display = 'block'
})


 divs.forEach((element) =>{
   element.addEventListener('click',() =>{
    // we used a for each loop to travel each event of the array and created addEventListener 'click'. 
    if(element.classList.contains('flipped') || element.classList.contains('match') ){
      return 
    }
    if(firstDiv === secondDiv){
      firstDiv = element
      element.closest('div').classList.add('flipped') 
    }else{
      secondDiv = element
      element.closest('div').classList.add('flipped')

      setTimeout(checkingMatch,800) 
      firstDiv = 'undefined'
      secondDiv = 'undefined' 
    
  }  
   })
 }) 
 
  const BBimages = ['album.jpeg','yhlqmdlg.jpeg','oasis.jpeg','ultimoTour.jpeg','Verano.jpeg','x100pre.png','album.jpeg','yhlqmdlg.jpeg','oasis.jpeg','ultimoTour.jpeg','Verano.jpeg','x100pre.png']

 function shuffle() {
  let cards = document.querySelectorAll('.card img:not(.back)')
  cards.forEach(img => img.src='') // setting all images.src to nothing. meaning no source.
 
  for( let i = 0 ; i < 12 ; i++){
    
    let newcards = document.querySelectorAll("img[src='']")
    let random = Math.floor(Math.random() * newcards.length)
    
    newcards[random].parentNode.classList.remove('flipped','match')
    newcards[random].src = BBimages[i] 
  }
}
//call shuffle function
shuffle(BBimages)
// Used like so
console.log(BBimages);


function checkingMatch(){
  console.log('hit')
// we're selecting the flipped classes but not the backs ( we have to do this all front class have different number at the end but the back have the class name that should not be compared)
  let firstImage = document.querySelectorAll('.flipped>img:not(.back)')[0]
   // querySelectorAll targets the array of flipped cards. thats why we using the square brackets in the first and second index of the element.
  let secondImage = document.querySelectorAll('.flipped>img:not(.back)')[1]
  console.log(secondImage.parentNode,firstImage.parentNode)
  console.log(firstImage.src,secondImage.src)
  firstImage.parentNode.classList.remove('flipped')
  secondImage.parentNode.classList.remove('flipped')

  if(firstImage.src === secondImage.src){
    console.log('its a match')
    firstImage.parentNode.classList.add('match')
    secondImage.parentNode.classList.add('match')
    checkForWin()
  }
}
let totalCards = 12
function checkForWin(){
  //if all cards are matched, the game is over.
  if( document.querySelectorAll('.match').length === totalCards){
    alert('Gamer Over')
    shuffle()
  }
}


