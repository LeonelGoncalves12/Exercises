/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/
class Solution {
    public int singleNumber(int[] nums) {   
        Arrays.sort(nums);
        for(int i = 0; i< nums.length; i++){
            if(i+1 == nums.length){
                return nums[i];
            }
            if(nums[i] != nums[i+1]){
                return nums[i];
            }
            i++;
        }
        return 0;
    }
}