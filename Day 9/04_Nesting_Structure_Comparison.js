function isArray(array) {
    return array.constructor === Array;
}
Array.prototype.sameStructureAs = function (other) {
    if (!isArray(other)) return false;
    if (this.length != other.length) return false;
  
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      const otherElement = other[i];
      if (isArray(element) && !element.sameStructureAs(otherElement)) {
        return false;
      } else if (!isArray(element) && isArray(otherElement)) {
        return false;
      }
    }
  
    return true;
  };
  