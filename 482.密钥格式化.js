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
    S = S.replace(/\-/g, '');
    // var len = S.length - 1;
    // var res = ''
    // var ss = ''
    // console.log(S, len)
    // while (len >= 0) {
    //     if (ss.length !== K) {
    //         ss = S[len] + ss
    //     } else {
    //         res = '-' + ss + res;
    //         ss = ''
    //     }
    //     len--;
    // }
    // return res;
    S = S.split('').reverse();
    var res = [];
    var i = 0
    console.log(S)
    while (res.length < S.length / K) {
        res.push(S.slice(0 * i + K, K * i + K))
        i++
    }
    console.log(res)
};
// @lc code=end

