const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.square = function() {
  const newArray = [];
  
  for (let i = 0; i < this.length; i+= 1) {
    newArray.push(Math.pow(this[i], 2));
  }

  return newArray;
}

Array.prototype.cube = function() {
  const newArray = [];

  for (let i = 0; i < this.length; i+= 1) {
    newArray.push(Math.pow(this[i], 3));
  }

  return newArray;
}

Array.prototype.average = function() {
  if (this.length === 0) return NaN;
  
  let average = 0;

  for (let i = 0; i < this.length; i+= 1) {
    average+= this[i];
  }

  average = average / this.length;

  return average;
}

Array.prototype.sum = function() {
  if (this.length === 0) return NaN;

  let sum = 0;
  
  for (let i = 0; i < this.length; i+= 1) {
    sum += this[i];
  }

  return sum;
}

Array.prototype.even = function () {
  if (this.length === 0) return NaN;

  const evenNumbers = [];

  for (let i = 0; i < this.length; i+= 1) {
    if (this[i] % 2 === 0) evenNumbers.push(this[i]);
  }

  return evenNumbers;
}

Array.prototype.odd = function () {
  if (this.length === 0) return NaN;

  const oddNumbers = [];

  for (let i = 0; i < this.length; i+= 1) {
    if (this[i] % 2 !== 0) oddNumbers.push(this[i])
  }

  return oddNumbers;
}


console.log(test.odd())
 