/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    var count = 1;
    var str = a;

    while (str.indexOf(b) == -1) {
        count++;
        str += a
    }
    return count;
};
// @lc code=end

