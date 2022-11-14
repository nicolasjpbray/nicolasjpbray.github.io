var header = new Vue({
	el: '#header',
		data: {
			yourName: 'Nicolas Bray',
			description: "I'm a fifth year EMST student at the University of Georgia",
			linkOne: "https://nicolasjpbray.github.io/nmc/",
			link2: "https://nicolasjpbray.github.io/",
			link3: "",
			link4: "",
			link5: "List"
		}
})

var portfolio = new Vue({
	el: '#portfolio',
	data: {
		portfolioTitle: "Say something here about your portfolio title",
		image1: "images/one.jpg",
		imgText1: "Images One",
		image2: "images/two.jpg",
		imgText2: "Images Two",
		image3: "images/three.jpg",
		imgText3: "Images Three",
		image4: "images/four.jpg",
		imgText4: "Images Four",
		image5: "images/five.jpg",
		imgText5: "Images Five",
		image6: "images/six.jpg",
		imgText6: "Images Six"
	}
})

var about = new Vue({
	el: '#about',
	data: {
		aboutText: "Here's some holder text that will one day say something about me and what I do!",
		image1: "images/puppy.jpg",
		imgText1: "Images One"

	}
})



var contact = new Vue({
	el: '#contact',
	data: {
		contactText: "Here's some holder text that will one day say something about contacting me!"

	}
})

var list = new Vue({
	el: '#list',
	data: {
		favorites: ['Last Resort', 'Mama\'s Boy', 'Clocked', 'Heirloom Cafe']

	}
})

var conditional = new Vue({
	el: '#conditional',
	data: {
		teacherName:""
	}
})


var getColor = new Vue({
	el: '#function',
	data: {
		bgColor:'',
		colors: ['red', 'green', 'blue']
	},
	methods: {
		changeColor(color){
			this.bgColor = color
		}
	}
})