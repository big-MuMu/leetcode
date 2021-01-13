/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const X = x.toString();

    let start = 0;
    let end = X.length - 1;

    while (start < end) {
        if (X[start] === X[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true
};
// @lc code=end

