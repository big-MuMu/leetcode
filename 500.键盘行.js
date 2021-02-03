/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var res = [];
    words.forEach(word => {
        const len = word.length;
        var reg = new RegExp(`[qwertyuiop]{${len}}|[asdfghjkl]{${len}}|[zxcvbnm]{${len}}`, 'i');
        if (reg.test(word.toLocaleLowerCase())) {
            res.push(word);
        }
    })
    return res;
};
// @lc code=end

