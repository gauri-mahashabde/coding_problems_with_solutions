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
