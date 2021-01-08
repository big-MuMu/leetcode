/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.toUpperCase().split('').reverse().join('');
    S = S.split('-').join('');
    var i = 0;
    var res = [];
    while (i * K < S.length) {
        
        res.push(S.slice(i * K, K * i + K).split('').reverse().join(''));
        i++
    }
    // while ()
    return res.reverse().join('-');
};
// @lc code=end

