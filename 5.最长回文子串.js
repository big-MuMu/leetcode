/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var slow = 0;
    var fast = 1;
    var res = '';
    while (slow < s.length && fast < s.length + 1) {
        var newStr = s.substr(slow, fast);
        var newStrRever = newStr.split('').reverse().join('');
        // console.log(slow, newStr, newStrRever);
        if (newStr === newStrRever) {
            res = res.length > newStr.length ? res : newStr;
            fast++;
        } else {
            slow++;
            // fast++;
        }
    }
    return res;
};
// @lc code=end

