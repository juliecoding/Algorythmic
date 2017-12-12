function House(name, material, color) {
  this.name = name;
  this.material = material;
  this.color = color;
}

this.prototype.collapse = function() {
  console.log("It's over!");
}

var yurt = new House("yurt", "hides", "creme");
var igloo = new House("igloo", "ice", "white");
var pueblo = new House("pueblo", "adobe", "creme");
