class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
          let i = 0

  

  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];

    if (item === val) {
      nums[index] = null
      continue
    }
    i++


  }

  nums.sort()
  console.log(nums)



  return i

    }
}
