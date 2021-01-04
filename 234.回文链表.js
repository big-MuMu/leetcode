/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var array = [];
    while (head) {
        array.push(head.val);
        head = head.next
    }

    var left = 0;
    var right = array.length - 1;

    while (left < right) {
        if (array[left] === array[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }
    return true
};
// @lc code=end

