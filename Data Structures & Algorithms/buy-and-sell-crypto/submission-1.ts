class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let maxProfit = 0

    let l = 0
    let r = 1

    while (l < r && r < prices.length) {
      if (prices[r] - prices[l] > 0) {
        maxProfit = Math.max(maxProfit, prices[r] - prices[l])
      } else {
        l = r
      }
      r++
    }

    return maxProfit
  }
}