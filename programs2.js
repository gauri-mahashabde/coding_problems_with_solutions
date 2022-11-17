//problem statement 5

const array1 = [1, 3];
const array2 = [2];
var findMedianSortedArrays = function (nums1, nums2) {
    var nums3 = [...nums1, ...nums2].sort((a, b) => a - b)
    if (nums3.length % 2 !== 0) {
        return nums3[(nums3.length - 1) / 2]
    } else {
        return (nums3[(nums3.length / 2) - 1] + nums3[(nums3.length / 2)]) / 2
    }
};

//problem statement 6
const nums = [2, 2, 2, 0, 1];
document.getElementById("element3").innerHTML = nums;
var findMin = function (nums) {
    let i = 0;
    let j = nums.length - 1;
    if (j == 0) return nums[j];
    while (i < j) {
        if (nums[i] >= nums[j]) i++;
        else if (nums[j] > nums[i]) j--;
    }
    return nums[i];
};

const result = findMin(nums);

document.getElementById("element4").innerHTML = result;