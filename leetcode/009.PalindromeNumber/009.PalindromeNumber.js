function isPalindrome(x) {
  let y = 0
  let n = x

  if (n >= 0 && n <= 9) {
    return true
  } else if (n % 10 === 0) {
    return false
  } else {
    while (n) {
      y *= 10
      y += (n % 10)
      n = ~~(n / 10)
    }
    y = x < 0 ? -y : y
  }

  return y === x
}

