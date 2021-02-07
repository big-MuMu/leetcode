/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) {
        return 0;
    }
    var set = new Set();
    var res = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (set.has(nums[i] + k)) {
            res.add(nums[i]);
        }
        if (set.has(nums[i] - k)) {
            res.add(nums[i] - k)
        }
        set.add(nums[i])
    }
    return res.size;
};
// @lc code=end

