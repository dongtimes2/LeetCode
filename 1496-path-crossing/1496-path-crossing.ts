function isPathCrossing(path: string): boolean {
  const history = new Map();
  let result = false;
  let x = 0;
  let y = 0;
  
  history.set(`${x}-${y}`, true);
  
  for (const loc of path) {
    if (loc === 'N') {
      y++;
      if (history.has(`${x}-${y}`)) {
        result = true;
        break;
      } else {
        history.set(`${x}-${y}`, true);
      }
    } else if (loc === 'S') {
      y--;
      if (history.has(`${x}-${y}`)) {
        result = true;
        break;
      } else {
        history.set(`${x}-${y}`, true);
      }
      
    } else if (loc === 'E') {
      x++;
      if (history.has(`${x}-${y}`)) {
        result = true;
        break;
      } else {
        history.set(`${x}-${y}`, true);
      }
    } else if (loc === 'W') {
      x--;
      if (history.has(`${x}-${y}`)) {
        result = true;
        break;
      } else {
        history.set(`${x}-${y}`, true);
      }
    }
  }
  
  return result;
};