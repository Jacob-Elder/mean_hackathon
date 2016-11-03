(function() {
  angular.module('BlogApp')
  .component('headerComp', {
    templateUrl: 'components/header.html',
    controller: HeaderComp,
    controllerAs: 'headerComp'
  });

  function HeaderComp(){
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

  }

  headerComp.logInUser = function() {
    
  }
}

})()