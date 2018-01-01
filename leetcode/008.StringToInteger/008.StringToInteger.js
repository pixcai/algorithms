// 解法一
function myAtoi1(str) {
  const MAXSIGNINT = 2147483647
  let result = parseInt(str, 10)

  if (Number.isNaN(result)) {
    result = 0
  } else if (result > MAXSIGNINT) {
    result = MAXSIGNINT
  } else if (result < -(MAXSIGNINT + 1)) {
    result = -(MAXSIGNINT + 1)
  }

  return result
}

// 解法二
function myAtoi2(str) {
  const MAXSIGNINT = 2147483647
  const mappings = new Map()
  let result = 0

  for (let i = 48; i < 58; i++) {
    mappings.set(String.fromCharCode(i), i - 48)
  }

  str = str.trim()
  if (mappings.has(str[0]) || ['+', '-'].indexOf(str[0]) !== -1) {
    const sign = str[0] === '-' ? -1 : 1

    for (let i = (sign === -1 || str[0] === '+') ? 1 : 0; i < str.length; i++) {
      if (mappings.has(str[i])) {
        result *= 10
        result += mappings.get(str[i])
      } else {
        break
      }
    }
    result *= sign
    if (sign === -1 && result < -(MAXSIGNINT + 1)) {
      result = -(MAXSIGNINT + 1)
    } else if (result > MAXSIGNINT) {
      result = MAXSIGNINT
    }
  }

  return result
}

