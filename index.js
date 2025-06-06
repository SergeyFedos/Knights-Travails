function isValidMoves(x, y) {
  const moves = [
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1]
  ]
  return moves.filter(([x, y]) => x >= 0 && y < 8 && y >= 0 && x < 8);
}