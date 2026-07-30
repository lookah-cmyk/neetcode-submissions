// 2. Two Pointers
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome(s: string): boolean {
    const isPalindrome = (str: string) => {
      return str === str.split('').reverse().join('')
    }

    let l = 0
    let r = s.length - 1

    while (l < r) {
      if (s[l] !== s[r]) {
        const left = s.slice(l + 1, r + 1)
        const right = s.slice(l, r)

        return isPalindrome(left) || isPalindrome(right)
      }

      l++
      r--
    }

    return true
  }
}

//const s = new Solution()
// s.validPalindrome('aca') // true
//s.validPalindrome('abbadc') // false
// s.validPalindrome('abbda') // true
