class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  scoreOfString(s: string): number {
    let res = 0

    for (let index = s.length - 1; index >= 1; index--) {
      //   console.log(s[index].charCodeAt(0), s[index - 1].charCodeAt(0))
      const r = Math.abs(s[index].charCodeAt(0) - s[index - 1].charCodeAt(0))

      res += r
    }

    return res
  }
}