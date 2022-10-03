let buildList = document.querySelector('#userInput');
for(var i = 0; i < 100; i++) {
	buildList.innerHTML += "<option value="+i+">"+i+"</option>";
}


function compare() {
	let answer = document.querySelector('#userInput');
	answer = answer.value;
	answer=Number(answer)
	let reaction = document.querySelector('#response');
/*
	if(answer===24){reaction.innerHTML = "correct";}
	if(answer>30){reaction.innerHTML = answer + " is way too high";}
	if(answer<18){reaction.innerHTML = answer + " is way too low";}
	if(answer<30 && answer>24){reaction.innerHTML = answer + " is close but too high";}
	if(answer>18 && answer<24){reaction.innerHTML = answer + " is close but too low";}
*/

	switch(true) {
		case(answer==24):
			reaction.innerHTML = "correct";
			break;
		case (answer < 24):
			reaction.innerHTML = "too low";
			break;
		case (answer > 24):
			reaction.innerHTML = "too high"
			break;
	}
}