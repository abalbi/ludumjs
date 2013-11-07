ludumApp = angular.module('ludumApp',[]);
ElementoCtrlEditor = function ElementoCtrlEditor($scope,$http) {
  $scope.elemento = {
  	"elemento":"cose",
  	"autoid":true,
    "nuevo":true,
    "etiquetas":{}
  };
  $scope.tipos = {
  	"elemento": {
  		"autoid": false
  	},
  	"evento": {
  		"autoid": true
  	}
  }
  $scope.etiquetas = [
    {"nombre":"Contrabandista"},
    {"nombre":"Caza recompenzas"},
    {"nombre":"Senador"},
    {"nombre":"Tahur"},
    {"nombre":"Wookie"}
  ];
  $scope.guardar = function(){
    $http({
      method : 'POST',
      url : '/elemento/guardar',
      data : $scope.elemento
    })
  };
  $scope.definirTipo = function(){
  	$scope.elemento.autoid = $scope.tipos[$scope.elemento.tipo].autoid;
    $scope.cambio();
  };
  $scope.agregar_etiqueta = function(item,origen){
    if(!item) item = $scope.agregada_etiqueta;
    if(!origen) origen = 'usuario';
    $scope.elemento.etiquetas[item] = {"nombre":item,"origen":origen};
    $scope.agregada_etiqueta = '';
    $scope.cambio();
  }
  $scope.eliminar_etiqueta = function(nombre){
    delete $scope.elemento.etiquetas[nombre];
    $scope.cambio();
  }
  $scope.seleccionar_etiqueta = function (item) {
    $scope.agregar_etiqueta(item);
  }
  $scope.gen_id = function(){
    if($scope.elemento.nuevo) {
      if($scope.elemento.nombre) {
        $scope.elemento._id = $scope.elemento.nombre;
        $scope.elemento._id = $scope.elemento._id.replace(/\W/g,'').toLowerCase();
      }
    }
  }
  $scope.quitar_etiquetas_auto = function(etiquetas) {
    for (prop in $scope.elemento.etiquetas){
      if($scope.elemento.etiquetas.hasOwnProperty(prop)) {
        item = $scope.elemento.etiquetas[prop];
        if(item.origen != "auto") {
          etiquetas[prop] = item;
        }
      }
    };
  }
  $scope.cambio = function(){
    $scope.gen_id();
    etiquetas = {};
    $scope.quitar_etiquetas_auto(etiquetas);
    $scope.elemento.etiquetas = {};
    if($scope.elemento.nombre) {
      $scope.elemento.nombre.split(' ').forEach(function(item){
        etiquetas[item] = {"nombre":item};
      });
    }
    if($scope.elemento._id) etiquetas[$scope.elemento._id] = {"nombre":$scope.elemento._id};
    if($scope.elemento.tipo) etiquetas[$scope.elemento.tipo] = {"nombre":$scope.elemento.tipo};
    for (prop in etiquetas){
      if(etiquetas.hasOwnProperty(prop)) {
        item = etiquetas[prop];
        if(!item.origen) item.origen = "auto";
        $scope.elemento.etiquetas[item.nombre] = item;
      }  
    }
  }
}
filtrarEtiquetasPosibles = function filtrarEtiquetasPosibles(){
  return function(input,scope){
    array = [];
    input.forEach(function(item){
      if(!scope.elemento.etiquetas[item.nombre]) array.push(item);
    });
    return array;
  }
}  
ludumApp.controller('ElementoCtrlEditor',ElementoCtrlEditor);
ludumApp.filter('filtrarEtiquetasPosibles',filtrarEtiquetasPosibles);


