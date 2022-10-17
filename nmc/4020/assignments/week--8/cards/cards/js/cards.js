
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg",
"4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg",
"7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg",
"AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg",
"QC.jpg","QD.jpg","QH.jpg","QS.jpg"]

var shuffleDeck = [];
var hand = [];
var discardedCards = [];

function shuffle() {
	
	shuffleDeck = [];
	discardedCards = [];

	for(var i = 0; i < cards.length; i++) {
		let outcome = Math.floor(Math.random()*52);

		if((shuffleDeck.includes(cards[outcome]))) { 
			 i--;
		} else { 
			shuffleDeck[i] = cards[outcome];
		}
	}

	let output = "<h2>HAND</h2>";

	for(var j = 0; j < 5; j++) {
		hand[j] = shuffleDeck[0];
		shuffleDeck.splice(0, 1);
		output += "<img class=\"discardable\" src=cards/" + hand[j] + ">";
	}

	output += "<h2>DECK</h2>";

	for(var k = 0; k < shuffleDeck.length; k++) {
		output += "<img src=cards/" + shuffleDeck[k] + ">";
	}

	output += "<h2>DISCARD</h2><div id=\"discard\"></div>";


	document.querySelector('#deck').innerHTML = output;

	
	let holder = "";

	$(function() {
		$('.discardable').draggable();
	})

	$('.discardable').dblclick(function() {
		let discardPile = "";
		discardedCards += ("<img class=\"discarded\" src=" + $(this).attr("src") + ">");
		for(var i = 0; i < discardedCards.length; i++) {
			discardPile += discardedCards[i];
		}
		document.querySelector('#discard').innerHTML = discardPile;
		$(this).css("display", "none");
		
	})
}






