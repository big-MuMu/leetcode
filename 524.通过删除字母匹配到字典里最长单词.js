/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    function f(s1, t1) {
        var sIndex = 0;
        var tIndex = 0;
        while (sIndex < s1.length && tIndex < t1.length) {
            if (s1[sIndex] === t1[tIndex]) {
                sIndex++;
                tIndex++;
            } else {
                tIndex++;
            }
        }
        return sIndex === s1.length;
    }
    d = d.sort();
    var res = '';
    for (var i = 0; i < d.length; i++) {
        if (f(d[i], s) && res.length < d[i].length) {
            res = d[i]
        }
    }
    return res;
};
// @lc code=end

