/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var sArray = s.split(' ');
    if (pattern.length !== sArray.length) {
        return false;
    }

    var hash = {};
    var res = [];
    for (var i = 0; i < pattern.length; i++) {
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== sArray[i]) {
                return false;
            }
        } else {
            // 如果不在 hash 里，但是在 res 里，说明不匹配
            if (res.includes(sArray[i])) {
                return false;
            }
            res.push(sArray[i]);
            hash[pattern[i]] = sArray[i];
        }
    }
    return true;
};
// @lc code=end

