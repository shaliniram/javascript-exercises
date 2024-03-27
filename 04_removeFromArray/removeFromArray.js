const removeFromArray = function(arr_o, ...args) {
let arr_n = [];
arr_o.forEach( item ){
    if(!args.includes(item)){
        arr_n.push(item);
    }
}
return arr_n;
};

// Do not edit below this line
module.exports = removeFromArray;
