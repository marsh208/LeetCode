/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        
        ListNode currNode = head;
        
        if(head == null){
            return false;
        }
        
        while(currNode.next != null){
            
            if(currNode.next.val == Integer.MAX_VALUE){
                return true;
            }
            
            currNode = currNode.next;
            currNode.val = Integer.MAX_VALUE;
            
        }
        return false;
        
    }
}
