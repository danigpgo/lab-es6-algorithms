function mergeSort(array) {
  if (array.length < 2) { return array };

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortHalves = function(left, right) {
    const array = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    return [...array, ...left.slice(), ...right.slice()];
  };
  return sortHalves(mergeSort(left), mergeSort(right));
};



// array.slice() with no arguments is a trick to make a copy of the array
// .concat is to smash all of the arrays together
// ...maybe there's an ES6 way to do this?

module.exports = mergeSort;
