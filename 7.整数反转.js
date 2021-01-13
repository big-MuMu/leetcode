/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;

    if (isNegative) {
        x = -x;
    }

    x = x.toString().split('').reverse().join('');
    if (isNegative) {
        if (-Number(x) > -Math.pow(2, 31)) {
            return -Number(x)
        } else {
            return 0
        }
    } else {
        if (Number(x) > Math.pow(2, 31) - 1) {
            return 0
        } else {
            return Number(x)
        }
    }
};
// @lc code=end

