const repeatString = function(strname, num) {
    let string_name = new String();
    if(num == 0) return '';
    if(num < 0) return "ERROR";
    for(let i=0;i<num;i++){
        string_name += strname;
    }
return string_name;
};

// Do not edit below this line
module.exports = repeatString;
