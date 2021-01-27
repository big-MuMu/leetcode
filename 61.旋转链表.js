/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }
    var len = 1;
    var h = head;
    while (h && h.next) {
        h = h.next;
        len++;
    }

    k %= len;
    var first = head;
    var second = head;
    while (k--) {
        first = first.next;
    }
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    first.next = head;
    head = second.next;
    second.next = null;
    return head;
};
// @lc code=end

