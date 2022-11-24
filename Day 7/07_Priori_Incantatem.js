class Wand {
    constructor(spells = {}){
        this.arr = [];
        Object.keys(spells).forEach(element => this[element] = spells[element] );
      return new Proxy(this,{
        get: (target,property) =>{
            const value = target[property];
            if(typeof value === "function"){
                target.arr.unshift(property);
            }
            return value;
        }
      })   
    }
    prioriIncantatem(){
        return this.arr.slice(1,3);
    }
    deletrius(){
        this.arr = ["deletrius"]
    }
}

// const w = new Wand({peskipiksiPesternomi: function() {}});
const w = new Wand();