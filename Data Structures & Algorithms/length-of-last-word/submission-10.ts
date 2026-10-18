class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLastWord(s: string) {
    const n = s.length
    let i = n - 1
    let length = 0

    while (s.charAt(i) === ' ') {
      i--
    }

    while (i >= 0 && s.charAt(i) !== ' ') {
      length++
      i--
    }

    return length
  }
}