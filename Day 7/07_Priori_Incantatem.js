// What are you, a Squib? Get coding!!
class Wand {
    constructor(spells = {}){
        Object.keys(spells).forEach(element => {
        console.log(element);
      });    
    }
}

// const w = new Wand({peskipiksiPesternomi: function() {}});
const w = new Wand();