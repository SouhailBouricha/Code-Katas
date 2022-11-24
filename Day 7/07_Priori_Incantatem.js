// What are you, a Squib? Get coding!!
class Wand {
    constructor(spells = {}){
        this.arr = [];
        Object.keys(spells).forEach(element => {
        this[element] = () => { 
            this.arr.unshift(element);
            spells[element]
        };
      });    
    }
    prioriIncantatem(){
        const casted = [...this.arr];
        this.arr.unshift("prioriIncantatem");
        return casted;
    }
}

// const w = new Wand({peskipiksiPesternomi: function() {}});
const w = new Wand();