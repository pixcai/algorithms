function uniquePathsWithObstacles(obstacleGrid) {
  const rows = obstacleGrid.length - 1
  const cols = obstacleGrid[0].length - 1

  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows][cols] === 1) {
    return 0
  }

  obstacleGrid[rows][cols] = -1
  for (let col = cols; col >= 0; col--) {
    for (let row = rows; row >= 0; row--) {
      if (obstacleGrid[row][col] !== 1) {
        if (col < cols && obstacleGrid[row][col + 1] !== 1) {
          obstacleGrid[row][col] += obstacleGrid[row][col + 1]
        }
        if (row < rows && obstacleGrid[row + 1][col] !== 1) {
          obstacleGrid[row][col] += obstacleGrid[row + 1][col]
        }
      }
    }
  }

  return -obstacleGrid[0][0]
}

