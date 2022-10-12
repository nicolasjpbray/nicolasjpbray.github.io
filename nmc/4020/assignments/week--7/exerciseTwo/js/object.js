let classObject = {"AlexW": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
"AlexC": " My beard is thicker than this photo shows. I need new pictures :-(",
"Allison": "I write about peanuts. ",
"Amy": " I like mint tea and taking pictures!",
"Andrea": "Let me think about it",
"AnnaGrace": "Too much to list ",
"Brandon": " I do a yearly snowboarding trip with my friends.",
"Cydney": "I'm a Libra. ",
"Elizabeth": " I grew up right outside of Washington, D.C. and have the Red Metro line memorized. ",
"Grant": "I like pups ",
"Haleigh": "I have a German Shepherd pup named Rayna! ",
"Hua": " I know a bit of drums",
"Jenny": "I won front row tickets to Hamilton this summer.",
"Kaitlyn": "I am a wedding and portrait photographer! ",
"McKenzie": " I'm an intern for Barstool Sports",
"Melissa": " I'm resubmitting my site for class assignments.",
"Morgan": "I am from Athens. ",
"Niambi": "I was born in New York.",
"Tyler": "I currently hold 5 national records in swimming for the country Bermuda."}
 
let nameArray =["AlexW","AlexC","Allison","Amy","Andrea","AnnaGrace","Brandon","Cydney","Elizabeth","Grant","Haleigh","Hua","Jenny","Kaitlyn","McKenzie ","Melissa","Morgan","Niambi","Tyler"];

 

let nameList = document.querySelector("#aname");
for(i=0;  i<nameArray.length;  i++) {
	nameList.innerHTML += "<option value=" + nameArray[i] + ">" + nameArray[i] + "</option>";
}



function quote(){
  let sName = document.getElementById('aname').value;
  let set = -1;
  for(i = 0; i < nameArray.length;i++){
  	if(sName.toLowerCase() === nameArray[i].toLowerCase()) {
  		set = i;
  	}
  }
  if(set==(-1)) {
  	document.querySelector('#aboutme').innerHTML = "Error.  Check spelling.";
  } else {
  	let name = nameArray[set];
  	const newArr = classObject;
  	document.querySelector('#aboutme').innerHTML = classObject[name];
  	document.querySelector('#image').innerHTML = "<img src='pix/" + nameArray[set] + ".jpg'>";
  }
  
}




