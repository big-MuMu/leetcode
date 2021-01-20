/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var map = {
        ']': '[',
        ')': '(',
        '}': '{'
    }
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (stack.pop() !== map[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i])
        }
    }
    return !stack.length;
};
// @lc code=end

