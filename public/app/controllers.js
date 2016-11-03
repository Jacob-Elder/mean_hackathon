//Your angular controllers get defined here.
angular.module("BlogApp")
.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl loaded!");

$scope.users = [
{
	username: "KimmaB",
	id: 1,
	profilepic: "http://il8.picdn.net/shutterstock/videos/15401104/thumb/1.jpg",
	email: "kimmyb@gmail.com",
	bio: "I'm a web developer from Seattle and am awesome yaaaay woot.",
	password: "password123",
	posts: [
		{
			title: "Why my cat is the shit",
			body: "My cat is the best cat ever, pretty much. She's like a dog in cat form. She is fluffy, adorable, and badass. She will follow you around the house. And tries to run down the hallway but slips around because her feet are so fluffy",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},
		{
			title: "Things to Do",
			body: "Things I'm planning on doing: paint my room, make my profile website, laundry, clean my kitchen, and MOREEEEE",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		}
	]
},
{
	username: "Kendeezy206",
	id: 2,
	profilepic: "https://growinglegendary.files.wordpress.com/2014/01/random-guy.jpg",
	email: "ken22@gmail.com",
	bio: "I'm a dude, you're a dude, we're all dudes",
	password: "wootstuffhi",
	posts: [
		{
			title: "ENW TITLEF DSLFJ",
			body: "My cat is the best cat ever, pretty much. She's like a dog in cat form. She is fluffy, adorable, and badass. She will follow you around the house. And tries to run down the hallway but slips around because her feet are so fluffy",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},
		{
			title: "Things to Do",
			body: "Things I'm planning on doing: paint my room, make my profile website, laundry, clean my kitchen, and MOREEEEE",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		}
	]}];

}])
.controller('NewPostCtrl', ['$scope', '$http', function($scope, $http){
	console.log("NewPostCtrl loaded!");
}])
.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http){
	console.log("ProfileCtrl loaded!");
	$scope.users = [
{
	username: "KimmaB",
	id: 1,
	profilepic: "http://il8.picdn.net/shutterstock/videos/15401104/thumb/1.jpg",
	email: "kimmyb@gmail.com",
	bio: "I'm a web developer from Seattle and am awesome yaaaay woot.",
	password: "password123",
	posts: [
		{
			title: "Why my cat is the shit",
			body: "My cat is the best cat ever, pretty much. She's like a dog in cat form. She is fluffy, adorable, and badass. She will follow you around the house. And tries to run down the hallway but slips around because her feet are so fluffy",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},
		{
			title: "Things to Do",
			body: "Things I'm planning on doing: paint my room, make my profile website, laundry, clean my kitchen, and MOREEEEE",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		}
	]
},
{
	username: "Kendeezy206",
	id: 2,
	profilepic: "https://growinglegendary.files.wordpress.com/2014/01/random-guy.jpg",
	email: "ken22@gmail.com",
	bio: "I'm a dude, you're a dude, we're all dudes",
	password: "wootstuffhi",
	posts: [
		{
			title: "ENW TITLEF DSLFJ",
			body: "My cat is the best cat ever, pretty much. She's like a dog in cat form. She is fluffy, adorable, and badass. She will follow you around the house. And tries to run down the hallway but slips around because her feet are so fluffy",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},
		{
			title: "Things to Do",
			body: "Things I'm planning on doing: paint my room, make my profile website, laundry, clean my kitchen, and MOREEEEE",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		}
	]}];
}]);