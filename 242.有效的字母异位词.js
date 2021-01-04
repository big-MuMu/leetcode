/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var hash = {}
    for (var i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1
        hash[t[i]] = (hash[t[i]] || 0) - 1
    }

    for (var i = 0; i < t.length; i++) {
        if (hash[t[i]] !== 0) {
            return false;
        }
    }
    return true;
};
// @lc code=end

