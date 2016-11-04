//Your angular controllers get defined here.
angular.module("BlogApp")
.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl loaded!");


	// $http({
	// 	method: 'GET',
	// 	url: '/api/users'
	// }).then(function success(res){
	// 	$scope.users = res.data;
	// }, function error(err){
	// 	console.log(err);
	// });


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
			title: "Here is a Blog Post of Sorts",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec pretium elit. Proin a lacus vel felis dictum luctus. Aenean id viverra mi, eget ullamcorper quam. Vestibulum dictum sit amet tellus nec pretium. Mauris ultricies nisi dolor, eget convallis sem lobortis ut. Ut tortor purus, ultricies at dui vel, dictum varius nisl. Maecenas sed convallis eros. Integer non risus faucibus, vestibulum augue nec, tincidunt arcu. Mauris hendrerit dolor sed libero suscipit, eu malesuada nulla convallis. Vestibulum pharetra augue nisi. Pellentesque ultricies erat sed ipsum mattis faucibus. Maecenas laoreet dictum arcu, ac sollicitudin urna molestie at. Cras ornare pharetra tellus, placerat faucibus magna.",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},
		{
			title: "Things to Do",
			body: "Etiam faucibus diam a rhoncus dignissim. Donec dignissim commodo auctor. In ut vehicula eros, eget ultricies lorem. Vestibulum non enim posuere, tempor nisl a, tempor elit. Fusce at tincidunt lorem, eget aliquam ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus et congue libero, eu cursus neque. Ut ullamcorper justo non aliquet laoreet.",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},

		{
	username: "Person3984",
	id: 3,
	profilepic: "http://campusnooz.com/wp-content/uploads/2013/12/bitch.jpg",
	email: "kimmyb@gmail.com",
	bio: "Hey everyone",
	password: "pass",
	posts: [
		{
			title: "vehicula eros, eget ultricies",
			body: "heres a blog!",
			picurl: "none"
		},
		{
			title: "Anothter post",
			body: "ad another",
			picurl: "none"
		}
	]
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
			title: "Here is a Blog Post of Sorts",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec pretium elit. Proin a lacus vel felis dictum luctus. Aenean id viverra mi, eget ullamcorper quam. Vestibulum dictum sit amet tellus nec pretium. Mauris ultricies nisi dolor, eget convallis sem lobortis ut. Ut tortor purus, ultricies at dui vel, dictum varius nisl. Maecenas sed convallis eros. Integer non risus faucibus, vestibulum augue nec, tincidunt arcu. Mauris hendrerit dolor sed libero suscipit, eu malesuada nulla convallis. Vestibulum pharetra augue nisi. Pellentesque ultricies erat sed ipsum mattis faucibus. Maecenas laoreet dictum arcu, ac sollicitudin urna molestie at. Cras ornare pharetra tellus, placerat faucibus magna.",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		},
		{
			title: "Things to Do",
			body: "Etiam faucibus diam a rhoncus dignissim. Donec dignissim commodo auctor. In ut vehicula eros, eget ultricies lorem. Vestibulum non enim posuere, tempor nisl a, tempor elit. Fusce at tincidunt lorem, eget aliquam ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus et congue libero, eu cursus neque. Ut ullamcorper justo non aliquet laoreet.",
			picurl: "https://s-media-cache-ak0.pinimg.com/originals/5d/14/70/5d1470540cac5172d33200bc3414245d.jpg"
		}
	]}];


	// $http({
	// 	method: 'GET',
	// 	url: '/api/users'
	// }).then(function success(res){
	// 	$scope.users = res.data;
	// }, function error(err){
	// 	console.log(err);
	// });

}]);