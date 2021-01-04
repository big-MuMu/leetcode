/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    var r = [];
    var i = 0;
    while (i < s.length) {
        if (r.length && r[r.length - 1].toUpperCase() === s[i].toUpperCase() && r[r.length - 1] !== s[i]) {
            r.pop()
        } else {
            r.push(s[i]);
        }
        i++
    }
    return r.join('')
};
// @lc code=end

