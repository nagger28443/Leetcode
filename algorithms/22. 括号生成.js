/** 回溯
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  backtrace('', 0);
  return res;
  function backtrace(cur, right) {
    if (right === n) {
      if (cur.length > 0) {
        res.push(cur);
      }
      return;
    }
    if (cur.length - right < n) {
      backtrace(cur + '(', right);
    }
    if (cur.length > right * 2) {
      backtrace(cur + ')', right + 1);
    }
  }
};
