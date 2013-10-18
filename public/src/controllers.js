ludumApp = angular.module('ludumApp',[]);
ElementoCtrlEditor = function ElementoCtrlEditor($scope,$http) {
  $http.get('/elemento.json').success(function(data) {
    $scope.elemento = data;
  });
  $scope.gen_id = function(){
    $scope.elemento.id = $scope.elemento.nombre;
    if($scope.elemento.id) {
      $scope.elemento.id = $scope.elemento.id.replace(/\W/g,'').toLowerCase();
    }
  }
  $scope.master = {};
  $scope.update = function(elemento) {
  	if(!elemento) {
      elemento = $scope.elemento;
  	}
  	$scope.master = angular.copy(elemento);
    $http({
      method : 'POST',
      url : '/elemento/guardar/' + $scope.master.id,
      data : $scope.master
    }).success(function(data, status){
      data.nombre = 'adfadsf';
      alert(data);
      $scope.master = angular.copy(data);
      $scope.elemento = angular.copy($scope.master);
    });
  }
  $scope.reset = function() {
  	$scope.elemento = angular.copy($scope.master);
  }
}  
ludumApp.controller('ElementoCtrlEditor',ElementoCtrlEditor);


 


