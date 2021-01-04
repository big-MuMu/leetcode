/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    C: 100,
    D: 500,
    M: 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    "XC": 90,
    'CD': 400,
    'CM': 900
}
var romanToInt = function(s) {
    
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i] + s[i + 1]]) {
            count += map[s[i] + s[i + 1]]
            i++
        } else {
            count += map[s[i]]
        }
    }
    return count;
};
// @lc code=end

