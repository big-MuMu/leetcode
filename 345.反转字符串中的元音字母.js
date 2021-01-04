/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length;
    const Y = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    s = s.split('')
    while (left < right) {
        if(Y.includes(s[left]) && Y.includes(s[right])) {
            var temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        } else if (Y.includes(s[left]) && !Y.includes(s[right])) {
            right--;
        } else {
            left++
        }
    }
    return s.join('');
};
// @lc code=end

