const sumAll = function(a,b) {
let sum=0;
if(a<0 || typeof a !== 'number'||  typeof b !== 'number' ) {return "ERROR";}
else{
    if(a>b){
        let temp=b;
        b=a;
        a=temp;
    }
  for(let i=a;i<=b;i++){
    sum+=i;
  }
  return sum;}
};

// Do not edit below this line
module.exports = sumAll;
