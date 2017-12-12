//This implementation uses a string to represent a stack
// Stacks are "last in, first out" (LIFO). You can't get at the item on the bottom (first thing added) without removing everything on top of it.

var Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function(val) {
  if (!this.storage) {
    this.storage += val;
  } else {
    this.storage = this.storage.concat(" ", val);
  }
  return this.storage;
};

Stack.prototype.pop = function() {
  var end = this.storage.lastIndexOf(" ");
  popped = this.storage.substring(end);
  this.storage = this.storage.slice(0, end);
  return popped;
};

Stack.prototype.size = function() {
  return this.storage.split(" ").length;
};

