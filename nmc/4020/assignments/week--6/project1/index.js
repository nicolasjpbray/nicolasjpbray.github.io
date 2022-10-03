let candidateInfo = [["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"], ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]]

let outputOne=document.querySelector('#slideOne');
let outputTwo=document.querySelector('#slideTwo');
let outputThree=document.querySelector('#slideThree');

let nextOne=document.querySelector('#nextOne')
let nextTwo=document.querySelector('#nextTwo')
let nextThree=document.querySelector('#nextThree')
let previousOne=document.querySelector('#previousOne')
let previousTwo=document.querySelector('#previousTwo')
let previousThree=document.querySelector('#previousThree')

nextOne.onclick = function () {newCandidate(1);}
nextTwo.onclick = function () {newCandidate(3);}
nextThree.onclick = function () {newCandidate(5);}
previousOne.onclick = function () {newCandidate(2);}
previousTwo.onclick = function () {newCandidate(4);}
previousThree.onclick = function () {newCandidate(6);}

let oneCounter = 0;
let twoCounter = 7;
let threeCounter = 14;

function newCandidate(buttonSelect) {
	switch(buttonSelect) {
		case 1: 
			oneCounter +=1;
			checkCounter(1, oneCounter);
			printOutput(oneCounter, outputOne);
			break;
		case 2:
			oneCounter -=1;
			checkCounter(1, oneCounter);
			printOutput(oneCounter, outputOne);
			break;
		case 3:
			twoCounter +=1;
			checkCounter(2, twoCounter);
			printOutput(twoCounter, outputTwo);
			break;
		case 4:
			twoCounter -=1;
			checkCounter(2, twoCounter);
			printOutput(twoCounter, outputTwo);
			break;
		case 5:
			threeCounter +=1;
			checkCounter(3, threeCounter);
			printOutput(threeCounter, outputThree);
			break;
		case 6:
			threeCounter -=1;
			checkCounter(3, threeCounter);
			printOutput(threeCounter, outputThree);
			break;
		default:
			break;
	}
}

function checkCounter(slideNumber, countNumber) {
	if(slideNumber==1 && countNumber > 6) {oneCounter =  0;}
	if(slideNumber==1 && countNumber < 0) {oneCounter =  6;}
	if(slideNumber==2 && countNumber > 13) {twoCounter =  7;}
	if(slideNumber==2 && countNumber < 7) {twoCounter =  13;}
	if(slideNumber==3 && countNumber > 20) {threeCounter =  14;}
	if(slideNumber==3 && countNumber < 14) {threeCounter =  20;}
}

function printOutput(count, outputSelector) {
		outputSelector.innerHTML = "<div>" + "<h2>" + candidateInfo[0][count] + "</h2>" + "<br><img src=pix/"+candidateInfo[1][count]+"></div>";
}
