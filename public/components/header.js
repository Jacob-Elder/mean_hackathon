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
  }

})()