let sq = document.querySelector('#square');
let holder = 150;
let counter = 0;

function changeCSS(color, radius, move) {  

	counter++;
	

	holder += move;

	if(counter%2==0) {
		holder = (-1)*holder;
	}else{
		holder = 0-holder;
	}
	holder = (move+((holder-(move-((holder-move)/3)))/2));
		sq.style.top = holder+"px";
		sq.style.left = holder+"px";

	

	sq.style.backgroundColor = color;
	sq.style.borderRadius = radius;
	sq.style.border = 'solid black 5px';
	sq.style.boxShadow = '0px 0px 10px';


}