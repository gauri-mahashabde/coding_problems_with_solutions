
//Problem statement 14
const arr = [1,3,5,6];
const target = 5;
document.getElementById("element1").innerHTML = arr;

const searchInsert = (nums, target, left = 0, right = nums.length - 1) => {
    if (left > right) return left;
    let mid = parseInt((left + right) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) return searchInsert(nums, target, mid + 1, right);
    else return searchInsert(nums, target, left, mid - 1);
};

const result = searchInsert(arr,target);
console.log(result);
document.getElementById("element2").innerHTML = result;

//Problem statement15
const  nums = [1,2,3,4,5,6,7];
const k = 3;

document.getElementById("element3").innerHTML = nums;
const rotate = function (nums, k) {
    k = k % nums.length;
    const lastK = nums.slice(nums.length - k);
    for (let i = nums.length - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = lastK[i];
    }
    return nums;
};

const result2 = rotate(nums,k);

document.getElementById("element4").innerHTML = result2;
console.log(result2);

//solution 2 for problem statement 15

const reverse = (array, start, end) => {
    // check for inputs
    if (!array || !array.length || start >= end) return;

    // perform reversing
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

const rotate5 = function (nums, k) {

    if (!nums || !nums.length) return;

    if (nums.length == 1) return nums;

    if (k > nums.length) k = k % nums.length;

    if (k > 0) {
        // first reverse the entire array
        reverse(nums, 0, nums.length - 1);
        // next reverse the k elements
        reverse(nums, 0, k - 1);
        // finally, reverse the elements after our k elements. 
        reverse(nums, k, nums.length - 1);
    }
    return nums;
};

rotate5(nums,k);
console.log(nums);