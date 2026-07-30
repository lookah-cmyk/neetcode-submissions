class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  majorityElement(nums: number[]): number {
    const obj: {[k: string]: number} = {}
    const half = Math.floor(nums.length / 2) + 1

    for (const item of nums) {
      obj[item] = (obj[item] ?? 0) + 1
    }

    const res = Object.keys(obj).find(k => {
      return obj[k] >= half
    })

    return Number(res)
  }
}