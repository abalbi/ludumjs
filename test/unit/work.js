var scope,ctrl;

describe('Controlador',function(){
  describe('Elemento',function(){
    beforeEach(function() {
      scope = {},
      ctrl = new ElementoCtrlEditor(scope);
    });

  	it('debe cambiar _id basado en el nombre si elemento.nuevo',function(){
      scope.elemento.nuevo = true;
      scope.elemento.nombre = "Leia Organa";
      scope.cambio();
      expect(scope.elemento._id).toEqual('leiaorgana');
  	})
  	it('debe cargar una etiqueta por cada palabra del nombre si modifico',function(){
      scope.elemento.nombre = "Leia Organa";
      scope.cambio();
      expect(scope.elemento.etiquetas.Leia.nombre).toEqual('Leia');
      expect(scope.elemento.etiquetas.Organa.nombre).toEqual('Organa');
  	})
  	it('debe cargar una etiqueta con el valor del _id si modifico',function(){
      scope.elemento._id = "leiaorgana";
      scope.cambio();
      expect(scope.elemento.etiquetas.leiaorgana.nombre).toEqual('leiaorgana');
  	})
  	it('debe cargar una etiqueta con el nombre del tipo si modifico',function(){
      scope.elemento.tipo = "elemento";
      scope.cambio();
      expect(scope.elemento.etiquetas.elemento.nombre).toEqual('elemento');
  	})
  	it('debe agregar una etiqueta si agrego una etiqueta', function () {
  	  scope.agregar_etiqueta('Senador');
      expect(scope.elemento.etiquetas.Senador.nombre).toEqual('Senador');
  	})
    it('debe eliminar la etiqueta si se elimina la etiqueta',function(){
      scope.agregar_etiqueta('Senador');
      scope.eliminar_etiqueta('Senador');
      expect(scope.elemento.etiquetas.Senador).not.toBeDefined();
    })
  });
});