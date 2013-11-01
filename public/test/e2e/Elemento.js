describe('Elemento', function(){
  describe('Editor', function(){
    beforeEach(function() {
      browser().navigateTo('../../elemento/editor');
    });
    it('debe mostrar un mensaje si el objeto es autoid y _id no tiene valor',function(){
      expect(element('.idrequerido:visible').count()).toBe(1);
    });
    it('debe no mostrar un mensaje si el objeto es autoid y _id tiene valor',function(){
      input('elemento._id').enter("algun_id");
      expect(element('.idrequerido:visible').count()).toBe(0);
    });
  });	
});