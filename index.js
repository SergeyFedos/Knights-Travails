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
  ];
  return moves.filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
}

function knightMoves(start, end) {
  let queue = [[start]];
  let seen = new Set();

  while (queue.length) {
    let path = queue.shift();
    let [currentX, currentY] = path[path.length - 1];

    if (currentX === end[0] && currentY === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      return path;
    }

    const key = `${currentX},${currentY}`;
    if (seen.has(key)) continue;
    seen.add(key);

    for (let move of isValidMoves(currentX, currentY)) {
      queue.push([...path, move]);
    }
  }

  return null;
}
console.log(knightMoves([0, 0], [7, 7]))
