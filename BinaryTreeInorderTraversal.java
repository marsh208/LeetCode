/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */


class Solution {
    
    private List<Integer> nums = new ArrayList<Integer>();
    
    public List<Integer> inorderTraversal(TreeNode root) {
        
        
        TreeNode tempNode = root;
        
        
        
        if(tempNode == null){
            return nums;
        }
        
        if(root.left != null)
            inorderTraversal(root.left);
        
        nums.add(tempNode.val);
        
        if(root.right != null)
            inorderTraversal(root.right);
        
        return nums;
        
    }
}
