class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isSubsequence(s: string, t: string): boolean {
    let startIdx = 0
    let newStr = ''

    for (const c of s) {
      for (let index = startIdx; index < t.length; index++) {
        const element = t[index]

        if (c === element) {
          newStr = newStr + c
          startIdx = index + 1
          break
        }
      }
    }

    if (newStr === s) {
      return true
    }

    return false
  }
}