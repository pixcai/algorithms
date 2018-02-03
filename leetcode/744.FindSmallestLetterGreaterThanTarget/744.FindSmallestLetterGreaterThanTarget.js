function nextGreatestLetter(letters, target) {
  const N = letters.length - 1

  if (target < letters[0] || target >= letters[N]) {
    return letters[0]
  }

  for (let i = 1, j = N - 1; i <= j; i++, j--) {
    if (target < letters[i]) {
      return letters[i]
    }
    if (target >= letters[j]) {
      return letters[j + 1]
    }
  }
}

