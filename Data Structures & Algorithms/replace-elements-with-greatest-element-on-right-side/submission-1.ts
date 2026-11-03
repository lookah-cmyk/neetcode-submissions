// https://neetcode.io/problems/replace-elements-with-greatest-element-on-right-side/history?list=allNC&submissionIndex=0
class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr: number[]): number[] {
    const res = []
    const lastIndex = arr.length - 1
    let largest = -Infinity

    for (let index = lastIndex; index >= 0; index--) {
      res.unshift(Math.max(largest, -1))
      const element = arr[index]
      largest = Math.max(largest, element)
    }

    return res
  }
}

const s = new Solution()
s.replaceElements([2, 4, 5, 3, 1, 2]) // [5,5,3,2,2,-1]
