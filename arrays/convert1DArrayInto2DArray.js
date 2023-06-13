// Runtime: 210 ms, faster than 100.00% of JavaScript online submissions for Convert 1D Array Into 2D Array.
// Memory Usage: 62.3 MB, less than 90.19% of JavaScript online submissions for Convert 1D Array Into 2D Array.

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = (original, m, n) => {
  let row = [];
  for (let i = 0; i < original.length; i += n) {
    row.push(original.slice(i, i + n));
  }
  return original.length === m * n ? row : [];
};



module.exports = construct2DArray;