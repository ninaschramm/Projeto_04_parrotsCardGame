let cardsNumber

do { 
   cardsNumber = prompt("Com quantas cartas você deseja jogar?");
} while (cardsNumber % 2 != 0 || cardsNumber > 14 || cardsNumber < 4);

function comparador() { 
	return Math.random() - 0.5; 
}

let cardList = []

function dealCards() {
   for (i=0; i<cardsNumber/2; i++) {
      cardList.push(`<div class='card parrot${i}' onclick='turnCard(this)'></div>`)
      cardList.push(`<div class='card parrot${i}' onclick='turnCard(this)'></div>`)
   }
console.log(cardList)
cardList.sort(comparador)

   for (j=0; j<cardList.length; j++) { 
      document.querySelector(".cards").innerHTML += cardList[j]
   }
}



function countMoves() {
    
}

dealCards()

function turnCard(elt) {
   elt.classList.add("turned")
}

function compareCard() {
   
}
