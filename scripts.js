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
      cardList.push(`<div class='card ${parrot.name}' onclick='turnCard(this)'><img src='${parrot.img}'></div>`)
      cardList.push(`<div class='card ${parrot.name}' onclick='turnCard(this)'><img src='${parrot.img}'></div>`)
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
   const statusList = []
   for (let i=0; i<parrotList.length; i++) {
      statusList.push(parrotList[i].status)}

   if (statusList.includes("selected")) {
         compareCard(elt)
      }

   else {
   for (let i=0; i<parrotList.length; i++) {
      if (elt.classList.contains(`${parrotList[i].name}`) && parrotList[i].status == "notselected") {
         parrotList[i].status = "selected"
      }
   }
}

// unturnCards()

}

function compareCard(elt) {
   if (elt.classList.contains(`${parrotList[i].name}`) && parrotList[i].status == "selected") {
      parrotList[i].status = "matched"
   }
   else {parrotList[i].status = "notselected"}
}

function unturnCards() {
   let cardsTurned = document.querySelectorAll(".turned");
   for (let h=0; h<cardsTurned.length; h++) {
      cardsTurned[h].classList.remove('turned')
      }
   }
   

