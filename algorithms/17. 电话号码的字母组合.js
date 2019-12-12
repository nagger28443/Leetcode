/**
 * 回溯
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const list = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'kjl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];
  const res = [];
  backtrace('', digits);
  return res;

  function backtrace(cur, ds) {
    if (ds.length === 0) {
      if (cur.length > 0) {
        res.push(cur);
      }
      return;
    }
    const d = ds[0];
    for (let i = 0; i < list[d].length; ++i) {
      backtrace(cur + list[d][i], ds.slice(1));
    }
  }
};
