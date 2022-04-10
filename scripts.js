let cardsNumber

do { 
   cardsNumber = prompt("Com quantas cartas você deseja jogar?");
} while (cardsNumber % 2 != 0 || cardsNumber > 14 || cardsNumber < 4);

function comparador() { 
	return Math.random() - 0.5; 
}

const parrotList = [
   {name: "parrot1", img: 'arq/fiestaparrot.gif', status: 'notselected'},
   {name: "parrot2", img: 'arq/bobrossparrot.gif', status: 'notselected'},
   {name: "parrot3", img: 'arq/metalparrot.gif', status: 'notselected'},
   {name: "parrot4", img: 'arq/explodyparrot.gif', status: 'notselected'},
   {name: "parrot5", img: 'arq/unicornparrot.gif', status: 'notselected'},
   {name: "parrot6", img: 'arq/tripletsparrot.gif', status: 'notselected'},
   {name: "parrot7", img: 'arq/revertitparrot.gif', status: 'notselected'}
]

let cardList = []

function dealCards() {
   
   for (i=0; i<cardsNumber/2; i++) {
      const parrot = parrotList[i];
      cardList.push(`<div class='card'>
      <div class='card__inner' data-card='${parrot.name}' onclick='turnCard(this)'>
      <div class='card_face face_front'>
      <img src='arq/front.png'>
      </div>
      <div class='card_face face_back'>
      <img src='${parrot.img}'>
      </div>
      </div>
      </div>`)         
         
      cardList.push(`<div class='card'>
      <div class='card__inner' data-card='${parrot.name}' onclick='turnCard(this)'>
      <div class='card_face face_front'>
      <img src='arq/front.png'>
      </div>
      <div class='card_face face_back'>
      <img src='${parrot.img}'>
      </div>
      </div>
      </div>`)   
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

let cardFlipped = false;
let card1;
let card2;
let contador = 0;
let matches = 0;

function turnCard(elt) {
   contador += 1;
   elt.classList.add("turned")   
   if (cardFlipped == false) {
      cardFlipped = true;
      card1 = elt
   }
   else {
      cardFlipped = false;
      card2 = elt
      compareCards()
   }
   
   if (matches == cardList.length/2) {
      alert(`Você ganhou em ${contador} jogadas!`)
   }
   console.log(card1, card2, cardFlipped)
}


function compareCards() {
   if (card1.dataset.card === card2.dataset.card) {
      card1.onclick = null;
      card2.onclick = null;
      matches += 1;
   }
   else {
     setTimeout(unturnCards, 1000);
   }
}

function unturnCards() {
   card1.classList.remove("turned")
   card2.classList.remove("turned")
   }
   

