class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLastWord(s: string): number {
    const lengths: number[] = []
    let cur = ''

    for (let index = 0; index < s.length; index++) {
      const element = s[index]

      if (element === ' ') {
        if (cur !== '') {
          lengths.push(cur.length)
          cur = ''
        }
        continue
      }

      cur += element

      if (index === s.length - 1 && cur) {
        lengths.push(cur.length)
      }
    }

    return lengths[lengths.length - 1]
  }
}