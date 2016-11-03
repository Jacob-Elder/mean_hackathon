(function() {
  angular.module('BlogApp')
  .component('headerComp', {
    templateUrl: 'components/header.html',
    controller: HeaderComp,
    controllerAs: 'headerComp'
  });

  function HeaderComp($http){
    console.log("header comp");
    var headerComp = this;
  

  headerComp.signUp = false;
  headerComp.logIn = false;

  headerComp.newUser = {
    username: "",
    email: "",
    password: "",
    profilepic: "",
    bio: ""
  };

  headerComp.logInInfo = {
    email: "",
    password: ""
  };

  headerComp.createUser = function() {
    $http.post('/api/users', headerComp.newUser)
    .then(function success(res){
      console.log("success: " + res);
    }, function error(err){
      console.log("error: " + err);
    })
}

  headerComp.logInUser = function() {
    console.log(headerComp.logInInfo);
    $http({
      method: "GET",
      url: "/api/users/login",
      params: headerComp.logInInfo
    })
    .then(function success(res){
      console.log("success");
    }, function error(err){
      console.log('you done fucked up sir: ' + err);
    })
  }

  headerComp.$inject = ['$http'];
}
  
})()