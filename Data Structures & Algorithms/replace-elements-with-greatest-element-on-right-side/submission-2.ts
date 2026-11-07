// https://neetcode.io/problems/replace-elements-with-greatest-element-on-right-side/history?list=allNC&submissionIndex=0
class Solution {
  replaceElements(arr: number[]) {
    const n = arr.length
    const ans = new Array(n)
    let rightMax = -1

    for (let i = n - 1; i >= 0; i--) {
      ans[i] = rightMax
      rightMax = Math.max(rightMax, arr[i])
    }

    return ans
  }
}

// const s = new Solution()
// s.replaceElements([2, 4, 5, 3, 1, 2]) // [5,5,3,2,2,-1]
