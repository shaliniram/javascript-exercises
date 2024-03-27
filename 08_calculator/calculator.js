const add = function(a,b) {

  return a+b;


};

const subtract = function(...args) {
	return a>b?a-b:b-a;
};

const sum = function() {
  var sum=0;
	for(var i=0;i<args.length;i++){
    sum+=args[i];
  }
  return sum;
};

const multiply = function() {
  var val=1;
	for(var i=1;i<=args.length;i++){
    val*=args[i];
  }
  return val;
};

const power = function() {
  return Math.pow(a, b);
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
