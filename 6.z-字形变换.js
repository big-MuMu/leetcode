/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var map = {}
    var row = 1;
    var flag = false;
    if (numRows < 2) {
        return s;
    }
    for (var i = 0; i < s.length; i++) {
        map[row] = (map[row] || '') + s[i];
        if (row === 1) {
            flag = true
        }
        if (flag && row < numRows) {
            row++;
        } else {
            flag = false;
            row--;
        }
    }
    var res = '';
    for (let key in map) {
        res += map[key]
    }
    return res;
};
// @lc code=end

