describe("Elemento", function() {
  var player;
  var song;

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
});
