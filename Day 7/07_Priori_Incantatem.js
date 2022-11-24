class Wand {
    constructor(spells = {}){
        this.arr = [];
        Object.keys(spells).forEach(element => this[element] = spells[element] );
      return new Proxy(this,{
        get: (target,property) =>{
            const value = target[property];
            if(typeof value === "function"){
                target.arr.unshift(property);
                console.log(value,"v",this.arr);
            }
            return value;
        }
      })   
    }
    prioriIncantatem(){
        return this.arr.slice(1,13);
    }
    deletrius(){
        this.arr = ["deletrius"]
    }
}

const w = new Wand();
w.expelliarmus = function() {};
w.alohomora = function() {};
w.expelliarmus();
console.log(w.alohomora.toString());
console.log(w.prioriIncantatem());
