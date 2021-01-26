/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];
    var len = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (stack.pop() === '(') {
                len += 2
            }
        } else {
            stack.push(s[i])
        }
    }

    len -= stack.length * 2
    return len;
};
// @lc code=end

