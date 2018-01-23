function plusOne(digits) {
  const result = []

  for (let i = digits.length - 1, done = false; i >= 0; i--) {
    if (!done) {
      if (++digits[i] < 10) {
        done = true
        result.unshift(digits[i])
      } else {
        result.unshift(digits[i] % 10)
        if (i === 0) {
          result.unshift(1)
        }
      }
    } else {
      result.unshift(digits[i])
    }
  }

  return result
}

