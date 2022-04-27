Array.prototype.same_structure_as = function (other) {
  console.log(other);
  if (this.length !== other.length) return false;

  for (let i = 0; i < this.length; i += 1) {
    if (Array.isArray(other[i]) && Array.isArray(this[i])) {
      if (!this[i].same_structure_as(other[i])) return false;
    } else if (!Array.isArray(this[i]) && Array.isArray(other[i])) {
      return false;
    } else if (Array.isArray(this[i]) && !Array.isArray(other[i])) {
      return false;
    }
  }

  return true;
};
