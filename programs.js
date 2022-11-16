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

//Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet.
//Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that :
//1.Each student gets exactly one packet.
//2.The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.
const chocolate = [3, 4, 1, 9, 56, 7, 9, 12];
document.getElementById("element3").innerHTML = chocolate;
let numberofPackets = 8;
let numberofchildrens = 5;
 function findMinDiff(arr,n,m){
    arr.sort((a,b) => a-b);
    let min = arr[m-1] - arr[0];
    let i = 1;
    let begin = 0; let end = m-1;
    while(i <= (n-m)){
        if((arr[m-1+i] - arr[i]) < min){
            min = arr[m-1+i] - arr[i];
        }
        i++;
    }
    return min;
}

console.log(findMinDiff(chocolate,numberofPackets,numberofchildrens));

const result1 = findMinDiff(chocolate,numberofPackets,numberofchildrens);
document.getElementById("element4").innerHTML = result1;

//problem statement 3

//solution 1

const arr2 = [5, 3, 6, 8, 4, 9]
document.getElementById("element5").innerHTML = arr2;
const t = 10;

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            if (sum == target) {
                return [i, j]
            }
        }
    }
};

const res = twoSum(arr2, t);
console.log(res);

document.getElementById("element6").innerHTML = res;

//solution 2 

const arr3 = [1, 4, 3, 5, 8, 9];
const tg = 7;

var twoSum = function (nums, target) {
let i = 0; let j = nums.length -1;
        let originalNums = [...nums];
        nums.sort((a,b) => a-b)
        while( i < j ) {
            let sum = nums[i] + nums[j]; 
            if(sum == target) { 
                if(nums[i] == nums[j]){
                    return [originalNums.indexOf(nums[i]),originalNums.indexOf(nums[j], i+1)]
                }
                return [originalNums .indexOf(nums[i]),originalNums.indexOf(nums[j])];
                }
            if(sum > target) j--;
            if(sum < target) i++;
        }
        return [0,1];

    }

    console.log(twoSum(arr3,tg));
