function range(start, fin) {
  if (start > fin) {
    return [];
  } else {
    return [start].concat(range(start + 1, fin));
  }
}

function recSum(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + recSum(array.slice(1));
  }
}

function expTheFirst(b, n) {
  if (n === 0) {
    return 1;
  } else {
    return b * expTheFirst(b, n - 1);
  }
}

function expSec(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else if (n % 2 === 0) {
    return expSec(b, n / 2) * expSec(b, n / 2);
  } else if (n % 2 !== 0) {
    return b * (expSec(b, (n - 1) / 2) * expSec(b, (n - 1) / 2))
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    var lastFib = fibonacci(n - 1);
    var lastEl = lastFib[lastFib.length - 1];
    var secondToLastEl = lastFib[lastFib.length - 2];
    return lastFib.concat([lastEl + secondToLastEl]);
  }
}

function binarySearch(array, target) {
  var index = Math.floor(array.length / 2);
  var arrayLower = array.slice(0, index);
  var arrayHigher = array.slice(index + 1, array.length);
  if (array[index] === target) {
    return index;
  } else if (array[index] > target) {
    return binarySearch(arrayLower, target);
  } else {
    return index + 1 + binarySearch(arrayHigher, target);
  }
}

function merge(array1, array2) {
  var merged = [];
  while (array1.length > 1 || array2.length > 1) {
    if (array1[0] < array2[0]) {
      merged.push(array1.shift());
    } else {
      merged.push(array2.shift());
    }
  }
  return merged.concat(array1).concat(array2);
}

function mergeSort(array) {
  debugger
  if (array.length <= 1) {
    return array;
  } else {
    var middleIndex = Math.floor(array.length / 2);
    var firstHalf = array.slice(0, middleIndex + 1);
    var lastHalf = array.slice(middleIndex + 1, array.length);

    return merge( mergeSort(firstHalf), mergeSort(lastHalf));
  }
}
