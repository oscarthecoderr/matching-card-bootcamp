// Create start button
// once button is click, display cards facing down and start button dissappears.
// select a single card first.
// once selected, reveal whats on the other side 
// after select another card. 
// if the two selected cards are the same, keep them upward. if not, turn it back around
// continue selecting cards until they all match. 
// check if all cards are upward and matched.
// notify user when game is won
// if the user want to play again, cards must be randomized and hidden.



const card =Array.from(document.querySelectorAll('div'))
console.log(card) //we created a variable name playGame and we are querySelecting div from the doc and turning it into an array with Array.from method

 card.forEach((element,index) =>{
   element.addEventListener('click',() =>{
     console.log(element)
    element.querySelector('span').classList.toggle('hidden')  
   })
 })
 
 function resetCards(){


 }






// we used a for each loop to travel each event of the array and created addEventListener 'click'.
 
// document.querySelector('.start').addEventListener(click,letsPlay)

// document.querySelectorAll('.container').addEventListener('click',selectCard)

// document.querySelector('button').addEventListener('click',PlayAgain)

// // const cardPairOne = document.querySelector('.card1').addEventListener('click',pairOne)

// // const cardSecondPair = document.querySelector('.card2').addEventListener('click',pairTwo)


// function pairOne(){

// }


