// 解法一
function isNumber1(s) {
  return s.trim() === '' ? false : !isNaN(s)
}

// 解法二
function isNumber2(s) {
  return /^\s*[+-]?(?:\d+\.?|\.?\d+(?:e[+-]?\d+)?|\d+\.\d*(?:e[+-]?\d+)?)\s*$/.test(s)
}

