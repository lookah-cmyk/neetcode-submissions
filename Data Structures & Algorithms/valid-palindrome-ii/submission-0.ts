class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome(s: string): boolean {
    const isPalindrome = (str: string) => {
      return str === str.split('').reverse().join('')
    }

    if (isPalindrome(s)) {
      return true
    }

    const array = s.split('')

    for (let index = 0; index < array.length; index++) {
      const copy = [...array]
      copy.splice(index, 1, '')
      const newString = copy.filter(Boolean).join('')

      if (isPalindrome(newString)) {
        return true
      }
    }

    return false
  }
}