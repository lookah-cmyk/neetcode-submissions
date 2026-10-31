// https://neetcode.io/problems/buy-and-sell-crypto/question
class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let maxProfit = 0

    let l = 0
    let r = 1

    while (r < prices.length) {
      const profit = prices[r] - prices[l]

      if (profit > 0) {
        maxProfit = Math.max(maxProfit, profit)
      } else {
        // l always points at the minimum price seen so far, and r scans every later day as a possible sell.
        // You never need to go back.

        // Why l can jump straight to r
        // Every day between the old l and r had profit > 0. That means each of those prices was higher than prices[l], so none of them was a better buy day.
        // The only day that beat l is r, so you skip directly to it.
        l = r
      }

      r++
    }

    return maxProfit
  }
}

// const input = [10, 1, 5, 6, 7, 1] // 6
// const input_ = [10, 5000, 5, 6, 7, 1] // 4990

// const s = new Solution()
// s.maxProfit(input)
// s.maxProfit(input_)
