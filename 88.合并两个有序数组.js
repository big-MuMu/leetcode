/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var max = m + n - 1;
    var i = m - 1;
    var j = n - 1;
    while (j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[max] = nums1[i];
            max--;
            i--;
        } else {
            nums1[max] = nums2[j];
            max--;
            j--;
        }
    }
    return nums1;
};
// @lc code=end

