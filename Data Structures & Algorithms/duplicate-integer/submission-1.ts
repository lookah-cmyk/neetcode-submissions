class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const obj: { [i: number]: number } = {};

        for (const item of nums) {
            obj[item] = (obj[item] ?? 0) + 1;
        }

        return Object.values(obj).some((k) => k > 1);
    }
}
