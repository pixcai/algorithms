function isToeplitzMatrix(matrix) {
  for (let i = 0, M = matrix[0].length - 1; i < M; i++) {
    for (let j = 0, N = matrix.length - 1; j < N; j++) {
      if (matrix[j][i] !== matrix[j + 1][i + 1]) {
        return false
      }
    }
  }

  return true
}

