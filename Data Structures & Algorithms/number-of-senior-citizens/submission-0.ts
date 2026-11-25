class Solution {
  /**
   * @param {string[]} details
   * @return {number}
   */
  countSeniors(details: string[]): number {
    let r = 0

    for (const d of details) {
      const age = Number(d.slice(11, 13))
      r += age > 60 ? 1 : 0
    }

    return r
  }
}