// What are you, a Squib? Get coding!!
class Wand {
    constructor(spells){
      
    }
  }


describe('The Wand constructor', function() {

    it('should return an instance of the Wand class', function() {
      Test.expect(new Wand() instanceof Wand);
    });
    
    it('should correctly add spells to a wand', function() {
      const w = new Wand({
        peskipiksiPesternomi: function() {}
      });
      Test.assertEquals(typeof w.peskipiksiPesternomi, 'function');
    });
  
  });
  
  describe('The prioriIncantatem method', function() {
  
    it('should naively work', function() {
      
      const w = new Wand({
        expelliarmus: function() {},
        alohomora: function() {},
        avadaKedavra: function() {}
      });
      
      // Note that the second function (expelliarmus) is only accessed, not called. 
      // Therefore, the name of the function will not be added to the history.
      w.alohomora();
      w.expelliarmus;
      w.avadaKedavra();
      
      Test.assertSimilar(w.prioriIncantatem(), ['avadaKedavra', 'alohomora']);
    });
  
  });