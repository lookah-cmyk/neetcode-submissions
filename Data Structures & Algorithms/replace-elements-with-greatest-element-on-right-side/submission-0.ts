class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr: number[]): number[] {
    const res = []
    const lastIndex = arr.length - 1
    let largest = -Infinity

    for (let index = lastIndex; index >= 0; index--) {
      //   console.log('index :>> ', index)
      //   console.log('element, largest :>> ', element, largest)

      res.unshift(Math.max(largest, -1))
      const element = arr[index]
      largest = Math.max(largest, element)
    }

    // console.log('res :>> ', res)

    return res
  }
}