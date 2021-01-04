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
    var r= [];
    for (var i = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            r.pop();
        } else if (ops[i] === 'D') {
            var l = r[r.length - 1];
            r.push(2 * l)
        } else if (ops[i] === '+') {
            var p1 = r[r.length - 1];
            var p2 = r[r.length - 2];
            r.push(Number(p1) + Number(p2))
        } else (
            r.push(Number(ops[i]))
        )
    }
    console.log(r)
    return r.reduce((prev,current,index,arr)=>{
        return prev + current
    })
};
// @lc code=end

