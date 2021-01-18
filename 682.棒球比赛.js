/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack = [];
    for (var i = 0; i < ops.length; i++) {
        var len = stack.length;
        if (ops[i] === 'C') {
            stack.pop();
        } else if (ops[i] === 'D') {
            stack.push(stack[len - 1] * 2);
        } else if (ops[i] === '+') {
            stack.push(Number(stack[len - 1]) + Number(stack[len - 2]))
        } else {
            stack.push(Number(ops[i]))
        }
    }
    return stack.reduce((pre, cur) => pre + cur, 0)
};
// @lc code=end

