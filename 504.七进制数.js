/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return '0'
    }
    var res = '';
    const isNegative = num < 0;
    if (isNegative) {
        num = -num;
    }
    while (num > 0) {
        res = num % 7 + res;
        num = Math.floor(num / 7)
    }
    if (isNegative) {
        res = '-' + res;
    }
    return res;
};
// @lc code=end

