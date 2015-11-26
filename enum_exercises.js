Array.prototype.each = function (block) {
  for (i = 0; i < this.length; i++) {
    block(this[i]);
  }
  return this
};


Array.prototype.map = function (block) {
  var mapped = [];

  function mutation(el) {
    mapped.push(block(el));
  }

  this.each(mutation);

  return mapped;
};

Array.prototype.inject = function (block) {
  var accumulator = this[0];
  var body = this.slice(1, this.length);

  function accumulate(el) {
    accumulator = block(accumulator, el);
  }

  body.each(accumulate);
  return accumulator;
};

var add = function (a, el) {
  return a + el;
}

var arr = ["hey", "yeah", "nah"];
