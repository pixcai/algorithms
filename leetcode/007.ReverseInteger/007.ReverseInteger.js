function reverse(x) {
  let y = 0
  let n = x

  while (n) {
    y *= 10
    y += (n % 10)
    n = ~~(n / 10)
  }
  if (y > 2147483647 || y < -2147483648) {
    return 0
  }

  return x < 0 ? -y : y
}

