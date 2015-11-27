Array.prototype.bubbleSort = function () {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        sorted = false;
        var intermediate = this[i];
        this[i] = this[i + 1];
        this[i + 1] = intermediate;
      }
    }
  }
  return this;
};

String.prototype.substrings = function (first_argument) {
  var substrings = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      substrings.push(this.substring(i, j));
    }
  }
  return substrings;
};

var arr = [1,6,2,4,2,8];
var h = "abc";
