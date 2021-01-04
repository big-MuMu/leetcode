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
    var hash = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    var r = [];
    for (var i = 0; i < s.length; i++) {
        if (!(s[i] in hash)) {
            r.push(s[i]);
        } else {
            if (hash[s[i]] !== r.pop()) {
                return false;
            }
        }
    }

    return !r.length
};
// @lc code=end

