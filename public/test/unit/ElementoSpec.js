describe("Elemento", function() {
  describe("Editor para nuevo elemento", function(){
    var scope, ctrl, $httpBackend;
    beforeEach(function() {
      inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/elemento.json').respond({});
        scope = $rootScope.$new();
        ctrl = $controller('ElementoCtrlEditor', {$scope: scope});
      });
    });
    
    it('debe tener vacio nombre y id', function(){
      $httpBackend.flush();
      expect(scope.elemento).toEqual({})
    });
    it('debe convertir el nombre a un string valido', function(){
      $httpBackend.flush();
      scope.elemento.nombre = "Leia Organa";
      scope.gen_id();
      expect(scope.elemento.id).toEqual('leiaorgana');
    });
    it('debe guardar en master los datos guardados',function(){
      $httpBackend.flush();
      scope.elemento.nombre = "Leia Organa";
      scope.gen_id();
      $httpBackend.expectPOST('/elemento/guardar/leiaorgana').respond({});
      scope.update();
      expect(scope.master.nombre).toEqual('Leia Organa');
      expect(scope.master.id).toEqual('leiaorgana');
    });
    it('debe recuperar los datos en master si se usa reset', function(){
      $httpBackend.flush();
      scope.elemento.nombre = "Leia Organa";
      scope.gen_id();
      scope.reset();
      expect(scope.elemento).toEqual({})

    })
  });

/*
  beforeEach(function() {
    elemento = new Elemento();
    mockProyecto = new Proyecto;
    elemento.proyecto(mockProyecto);
  });

  it("debe avisar si no tiene _id", function() {
    expect(elemento.avisar()).toContain('No tiene _id');
    elemento.id('unid');
    expect(elemento.avisar()).not.toContain('No tiene _id');
  });

  it("debe avisar si no tiene un _id que solo este compuesto por numeros y letras minusculas",function() {
    elemento.id('id no valido');
    expect(elemento.avisar()).toContain('El _id no es valido');
    elemento.id('idvalido');
    expect(elemento.avisar()).not.toContain('El _id no es valido');
  });

  it("debe autogenerar el _id compuesto solo por numeros y letras minusculas si le asigno un nombre y no tiene un id definido", function() {
    elemento.nombre('R2-d2');
    expect(elemento.avisar()).not.toContain('No tiene _id');
    expect(elemento.id()).toMatch(/^[a-z|\d]+$/);
  });
  
  it("debe avisar si el _id ya esta asignado",function(){
    spyOn(mockProyecto,'existe_id').andCallFake(function(){
      return true;
    });
    elemento.id('idvalido');
    expect(elemento.avisar()).toContain('_id ya existe');
    
  })
*/
});
