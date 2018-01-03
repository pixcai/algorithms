function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const N = s.length - 1
  let result = roman[s[N]]

  for (let i = 0, c, n; i < N; i++) {
    c = roman[s[i]]
    n = roman[s[i + 1]]
    result += c < n ? -c : c
  }

  return result
}

