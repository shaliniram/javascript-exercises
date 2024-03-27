const reverseString = function(str_name) {
    let str2 = new String();
    for(let i=str_name.length; i>=0; i--){
        str2+=str_name.charAt(i);
    }
    return str2;
};

// Do not edit below this line
module.exports = reverseString;
