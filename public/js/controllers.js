ludumApp = angular.module('ludumApp',[]);
ElementoCtrlEditor = function ElementoCtrlEditor($scope,$http) {
  $scope.elemento = {
  	"elemento":"cose",
  	"autoid":true
  };
}  
ludumApp.controller('ElementoCtrlEditor',ElementoCtrlEditor);
