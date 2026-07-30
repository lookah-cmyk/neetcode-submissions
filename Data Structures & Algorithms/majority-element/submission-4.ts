class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let candidate = nums[0];
        let count = 0;
        for (const n of nums) {
            if (count === 0) candidate = n;
            count += n === candidate ? 1 : -1;
        }
        return candidate;
    }
}
