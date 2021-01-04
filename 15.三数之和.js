/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 暴力解法
// var threeSum = function(nums) {
//     var res = []
//     nums.sort((a, b) => a - b)
//     for (var i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         for (var j = i + 1; j < nums.length - 1; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//             for (var k = j + 1; k < nums.length; k++) {
//                 if (k > j + 1 && nums[k] === nums[k - 1]) continue;
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     res.push([nums[i], nums[j], nums[k]])
//                 }
//             }
//         }
//     }
//     return res;
// };

// hash 解法
// var threeSum = function(nums) {
//     var res = []
//     var hash = {};
//     nums.sort((a, b) => a - b)
//     for (var i = 0; i < nums.length - 1; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue
//         for (var j = i + 1; j < nums.length; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue
//             if (hash[nums[j]] !== undefined) {
//                 res.push([nums[j], ...hash[nums[j]]])
//                 hash[nums[j]] = undefined
//             } else {
//                 var k = 0 - nums[i] - nums[j]
//                 hash[k] = [nums[i], nums[j]]
//             }
//         }
//     }
//     return res;
// };


// 双指针
var threeSum = function(nums) {
    var res = []
    nums.sort((a, b) => a - b)
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return res;
        }
        if (i > 0 && nums[i] === nums[i - 1]) continue
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var r = nums[i] + nums[left] + nums[right];
            if (r < 0) {
                left++;
            } else if (r > 0) {
                right--;
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++;
                right--;
            }
        }
    }
    return res;
};
// @lc code=end

