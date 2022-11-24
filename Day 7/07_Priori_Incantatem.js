class Wand {
    constructor(spells = {}){
        this.arr = [];
        Object.keys(spells).forEach(element => {
        this[element] = spells[element];
      });
      return new Proxy(this,{
        get: (target,property) =>{
            const value = target[property];
            if(typeof value === "function"){
                this.arr.unshift(property);
            }
            return value;
        }
      })   
    }
    prioriIncantatem(){
        const casted = [...this.arr];
        this.arr.unshift("prioriIncantatem");
        return casted;
    }
}

// const w = new Wand({peskipiksiPesternomi: function() {}});
const w = new Wand();