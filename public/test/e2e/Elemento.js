describe('Elemento', function(){
  describe('Editor', function(){
    beforeEach(function() {
      browser().navigateTo('../../elemento/editor');
    });
    it('debe mostrarse el mensaje elegir tipo si el tipo no esta seleccionado',function(){
      expect(element('.msgtiporequerido:visible').count()).toBe(1);
    });
    it('debe mostrar un mensaje si el objeto es autoid y _id no tiene valor',function(){
      select('elemento.tipo').option('elemento')
      expect(element('.idrequerido:visible').count()).toBe(1);
    });
    it('debe no mostrar un mensaje si el objeto es autoid y _id tiene valor',function(){
      select('elemento.tipo').option('evento')
      input('elemento._id').enter("algun_id");
      expect(element('.idrequerido:visible').count()).toBe(0);
    });
    it('debe no mostrar el campo _id si el tipo es evento',function(){
      select('elemento.tipo').option('evento')
      expect(element('.idrequerido:visible').count()).toBe(0);
    });
    it('debe guardar el elemento cuando se lo guarda',function(){
      input('agregada_etiqueta').enter('Senador');
      input('elemento.nombre').enter('Leia Organa');
      element('#agregar_etiqueta').click();
      expect(element('ul.etiquetas li').count()).toBe(4);
      element('#guardar').click();
    });
  });	
});