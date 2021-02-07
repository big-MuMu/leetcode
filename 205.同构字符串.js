/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // var hash = {};
    // var res = [];
    // for (var i = 0; i < s.length; i++) {
    //     if (hash[s[i]]) {
    //         if (hash[s[i]] !== t[i]) {
    //             return false;
    //         }
    //     } else {
    //         if (res.includes(t[i])) {
    //             return false;
    //         }
    //         res.push(t[i]);
    //         hash[s[i]] = t[i];
    //     }
    // }
    // return true;

    var hash1 = {};
    var hash2 = {};

    for (var i = 0; i < s.length; i++) {
        if (!hash1[s[i]]) {
            hash1[s[i]] = t[i]
        }

        if (!hash2[t[i]]) {
            hash2[t[i]] = s[i]
        }

        if (hash1[s[i]] !== t[i] || hash2[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

