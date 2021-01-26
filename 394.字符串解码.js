/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var stack = [];
    var res = '';
    var multiply = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            stack.push([multiply, res]);
            res = '';
            multiply = 0;
        } else if (s[i] === ']') {
            const [m, r] = stack.pop();
            res = r + res.repeat(m);
        } else if ('0' <= s[i] && s[i] <= '9') {
            multiply = multiply * 10 + Number(s[i])
        } else {
            res += s[i];
            console.log(res)
        }
    }
    return res;
};
// @lc code=end

