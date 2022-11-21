//problem statement 8 
//solution 1

let string = "SeetaRaaaamam"

document.getElementById("element1").innerHTML = string;
var maxPower = function(s) {
    if(s.length == 0) return 0;
    let maxLen = 1;
    let tempMaxLen = 0;
    let prevChar = '';
    [...s].forEach(c => {
        if(c === prevChar){
            console.log(prevChar);
            tempMaxLen++;
            console.log(tempMaxLen);
    } else {
        maxLen = maxLen < tempMaxLen ? tempMaxLen : maxLen;
        tempMaxLen = 1;
    }
        prevChar = c;
    })
    maxLen = maxLen < tempMaxLen ? tempMaxLen : maxLen;
    return maxLen;
};

const result = maxPower(string);
document.getElementById("element2").innerHTML = result;

//solution 2

var maxPower = function(s) {
    let maxStr = 1;
    let accum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            maxStr += 1;
        } else {
            maxStr = 1;
        }
        if (maxStr > accum) {
            accum = maxStr;
        }
    }

    return accum;
};


