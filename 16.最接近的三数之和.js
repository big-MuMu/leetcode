/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    var min = 10;
    for (var i = 0; i < nums.length; i++) {
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var c = nums[i] + nums[left] + nums[right] - 1;
            if (Math.abs(c) < Math.abs(min)) {
                min = Math.abs(c)
            }
            left++;
            right--;
        }
    }
    return min;
};
// @lc code=end

