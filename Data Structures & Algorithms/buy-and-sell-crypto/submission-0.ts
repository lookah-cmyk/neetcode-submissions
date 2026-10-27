class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let bestSoFar = 0

    for (let index = 0; index < prices.length - 1; index++) {
      const buy = prices[index]

      for (let j = index; j < prices.length; j++) {
        const sell = prices[j]

        const diff = sell - buy

        if (diff > bestSoFar) {
          bestSoFar = diff
        }
      }
    }

    return bestSoFar < 0 ? 0 : bestSoFar
  }
}