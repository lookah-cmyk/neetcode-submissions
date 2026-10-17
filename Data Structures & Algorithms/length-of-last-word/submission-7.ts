class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLastWord(s: string): number {
    const lengths: number[] = []
    let currentWord: string[] = []

    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i]

      // Char " " marks a separation between words
      if (currentChar === ' ') {
        if (currentWord.length !== 0) {
          lengths.push(currentWord.length)
          currentWord = []
        }
        continue
      }

      currentWord.push(currentChar)

      // Last i: insert currentWord if truthy even tho there is no " " after it (which cannot since it's the last i)
      if (i === s.length - 1 && currentWord) {
        lengths.push(currentWord.length)
      }
    }

    return lengths[lengths.length - 1]
  }
}