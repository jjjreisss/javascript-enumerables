Array.prototype.uniq = function () {
  var uniq = [];
  for (var i = 0; i < this.length; i++) {
    if (uniq.indexOf(this[i]) === -1) {
      uniq.push(this[i]);
    }
  }

  return uniq;
};

Array.prototype.twoSum = function () {
  var indices = [];
  for (var i = 0; i < (this.length - 1); i++) {
    for (var j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        indices.push([i, j]);
      }
    }
  }
  return indices;
};


Array.prototype.transpose = function () {
  var transpose = [];
  for (var i = 0; i < this[0].length; i++) {
    var row = [];
    for (var j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    transpose.push(row);
  }
  return transpose;
};
