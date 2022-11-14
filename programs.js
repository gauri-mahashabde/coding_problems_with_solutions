//given  is an array

const arr = [2, 5, 8, 6, 4, 1];
document.getElementById("element1").innerHTML = arr;

const result = [8, 6, 4, 1];

document.getElementById("element2").innerHTML = result;

//solution 1

// create a temp variable 
let temp = 0;

//create a empty array 
let leaders = [];

//Use for loop to loop over every element
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= temp) {
        temp = arr[i];
        leaders.push(temp);
    }
}

console.log(leaders);


//solution 2

let arr1 = [9, 7, 45, 32, 2, 13, 4, 8];


let leaders1 = [];
for (i = 0; i < arr1.length; i++) {
    let isLead = true;
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] < arr1[j]) {
            isLead = false;
            break;
        }
    }

    if (isLead == true) {
        leaders1.push(arr1[i])
    }
};


console.log(leaders1);