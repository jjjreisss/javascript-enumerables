Array.prototype.each = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};


Array.prototype.map = function (callback) {
  var mapped = [];

  function mutation(el) {
    mapped.push(callback(el));
  }

  this.each(mutation);
  //
  // this.each(function (el) {
  //   mapped.push(callback(el));
  // });

  return mapped;
};

Array.prototype.inject = function (callback) {
  var accumulator = this[0];
  var body = this.slice(1, this.length);

  // function accumulate(el) {
  //   return callback(accumulator, el);
  // }

  body.each(function (el) {
    accumulator = callback(accumulator, el);
  });

  return accumulator;
};

var add = function (a, el) {
  return a + el;
}


var arr = ["hey", "yeah", "nah"];
