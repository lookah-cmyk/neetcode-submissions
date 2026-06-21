class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash: { [i: string]: number } = {};

        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];

            if (hash[element] !== undefined) {
                return [hash[element], index];
            }

            const needed = target - element;

            hash[needed] = index;
        }

        return [];
    }
}
