class Solution {
  /**
   * @param {character[]} s
   * @return {void} Do not return anything, modify s in-place instead.
   */
  reverseString(s: string[]): void {
    let temp = s[0]
    let start = 0
    let end = s.length - 1

    while (start < end) {
      temp = s[start]

      s[start] = s[end]
      s[end] = temp

      start++
      end--
    }
  }
}

// const s = new Solution()
// s.reverseString(['n', 'e', 'e', 't']) // ['t', 'e', 'e', 'n']
// s.reverseString(['r', 'a', 'c', 'e', 'c', 'a', 'r']) // ['r', 'a', 'c', 'e', 'c', 'a', 'r']
