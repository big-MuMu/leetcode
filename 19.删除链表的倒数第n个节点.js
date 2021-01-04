/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

const { ppid } = require("process");

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dumy = new ListNode(0);
    dumy.next = head;
    var p = dumy;
    var q = dumy;

    for (var i = 0; i <= n; i++) {
        q = q.next
    }

    while(q) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next
    return dumy.next
};
// @lc code=end

