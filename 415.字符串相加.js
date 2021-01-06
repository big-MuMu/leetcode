/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var len1 = num1.length - 1;
    var len2 = num2.length - 1;
    var res = [];
    var add = 0;
    while (len1 >= 0 || len2 >= 0 || add) {
        var n1 = len1 >= 0 ? num1[len1] - 0 : 0;
        var n2 = len2 >= 0 ? num2[len2] - 0 : 0;
        var sum = n1 + n2 + add;
        res.push(sum % 10);
        add = Math.floor(sum / 10);
        len1--;
        len2--;
    }
    return res.reverse().join('')
};
// @lc code=end

