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
    
    private ArrayList<Integer> treeArr1 = new ArrayList<Integer>();
    private ArrayList<Integer> treeArr2 = new ArrayList<Integer>();
    
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        searchTree(p,treeArr1);
        searchTree(q,treeArr2);
        
        if(treeArr1.size() != treeArr2.size()){
            return false;
        }
        
        for(int i = 0; i < treeArr1.size(); ++i){
            if(treeArr1.get(i) != treeArr2.get(i)){
                return false;
            }
        }
        
        return true;
        
        
    }
    
    public static void searchTree(TreeNode node,ArrayList<Integer> treeArr){
        
        TreeNode currNode = node;        
        
        if(node == null){
            treeArr.add(null);
            return;
        }
        
        treeArr.add(currNode.val);
        
        searchTree(currNode.left, treeArr);
        searchTree(currNode.right, treeArr);
        
        
    }
}
