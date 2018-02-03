function uniquePaths(m, n) {
  const grid = Array(m).fill(0).map(() => Array(n).fill(0))
  const rows = m - 1
  const cols = n - 1

  grid[rows][cols] = 1
  for (let col = cols; col >= 0; col--) {
    for (let row = rows; row >= 0; row--) {
      if (col < cols) {
        grid[row][col] += grid[row][col + 1]
      }
      if (row < rows) {
        grid[row][col] += grid[row + 1][col]
      }
    }
  }

  return grid[0][0]
}

