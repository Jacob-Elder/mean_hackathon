//I recommend changing the name 'MeanHackathon' to reflect your own project name
angular.module("BlogApp", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  //This is what to do with an unknown state
  $urlRouterProvider.otherwise('/');

  //Your route definitions can be written here.
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "app/views/home.html",
    controller: 'HomeCtrl'
  })
  .state("new-post", {
  	url: '/new-post/:id',
  	templateUrl: "app/views/new-post.html",
  	controller: 'NewPostCtrl'
  })
  .state("profile", {
  	url: '/profile/:id',
  	templateUrl: "app/views/profile.html",
  	controller: "ProfileCtrl"
  })

  $locationProvider.html5Mode(true);
}]);
