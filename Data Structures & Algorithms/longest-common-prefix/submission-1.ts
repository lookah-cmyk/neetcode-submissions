class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix(strs: string[]): string {
    let commonIndex = 0

    const firstWord = strs[0]

    for (let charIndex = 0; charIndex < firstWord.length; charIndex++) {
      const char = firstWord[charIndex];


      for (let i = 1; i < strs.length; i++) {

        if (char !== strs[i][charIndex]) {
          return firstWord.slice(0, commonIndex)
        }

      }

      commonIndex++


    }

    return firstWord.slice(0, commonIndex)

  }
}