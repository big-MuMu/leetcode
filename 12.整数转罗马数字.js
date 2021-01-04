/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */


var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];    
var symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
var intToRoman = function(num) {
    var index = 0;
    var res = ''
    while(num) {
        if (num >= values[index]) {
            num -= values[index]
            res += symbols[index]
        } else {
            index++;
        }
    }
    return res;
};
// @lc code=end

