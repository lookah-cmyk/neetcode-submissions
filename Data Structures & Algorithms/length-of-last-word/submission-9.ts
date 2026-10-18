class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLastWord(s: string): number {
    let len = 0

    // Starting from the end, returning as soon as we find the first " " while len is > 1
    for (let index = s.length - 1; index >= 0; index--) {
      if (s[index] === ' ') {
        if (len > 0) {
          return len
        }
      } else {
        len++
      }
    }

    return len
  }
}