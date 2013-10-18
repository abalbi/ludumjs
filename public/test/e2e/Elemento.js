describe('Elemento', function(){
  describe('Editor', function(){
    beforeEach(function() {
      browser().navigateTo('../../elemento');
    });
    it('Debe cargarse el nombre y el id del elemento nuevo vacios',function(){
      expect(input('elemento.nombre').val()).toEqual('');
      expect(input('elemento.id').val()).toEqual('');
    });

    it('Debe convertir el nombre a un string valido cuando este es modificado', function(){
      input('elemento.nombre').enter("Leia Organa");
      expect(input('elemento.id').val()).toEqual('leiaorgana');
    });

  });	
});