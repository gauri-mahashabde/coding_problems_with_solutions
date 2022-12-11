//problem statement 11

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
document.getElementById("element1").innerHTML = sentences;
//console.log(sentences);

var mostWordsFound = function (sentences) {
    let max = 0
    for (let i = 0; i < sentences.length; i++) {
        let temp = sentences[i].split(" ").length;
        if (temp > max) max = temp;

    }
    return max;
};

let result = mostWordsFound(sentences);
document.getElementById("element2").innerHTML = result;

//problem statement 12 



//problem statement 13
//solution type 1

let address = "1.1.1.1";
document.getElementById("element5").innerHTML = address;

const defangIPaddr = (address) => address.replace(/\./g, "[.]");

const output = defangIPaddr(address);
document.getElementById("element6").innerHTML = output;

//solution type 2
//using for loop

const defangIPaddr1 = function (address) {
    let result = [];
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            result.push('[.]')
        }
        else {
            result.push(address[i]);
        }
    }
    return result.join("")
};
const output2 = defangIPaddr(address);
//console.log(output2);

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
document.getElementById("element3").innerHTML = arr;

function zeroSumPair(array) {
    for (let i = 0; i < arr.length - 1; i++) {
        //console.log(`outer ${numbers}`);
        for (let j = i + 1; j < array.length; j++) {
            //console.log(`inner ${array[j]}`)
            if (array[i] + array[j] === 0) {
                return [array[i], array[j]];
            }
        }
    }
}

const result1 = zeroSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
//console.log(result1);
document.getElementById("element4").innerHTML = result1;

/*
-5,-4,-3,-2,-1,0,1,2,3,4,6,
[-5+8 = +3]
*/

function findSumPair(arr) {
    let left = 0;
    let right = arr.length - 1;
                                    
//[-5, -4, -3, -2, 0, 2, 4, 6, 8];
    while (left < right) {
        sum = arr[left] + arr[right];
        //console.log(arr[left],arr[right]);
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) {
            right--|
            //console.log(right);
        }
        else {
            left++
            //console.log(left);
        }


    }
}
const res = findSumPair(arr);
console.log(res);


//Hello
//olleh


