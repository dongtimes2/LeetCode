function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const n = image.length;
  const m = image[0].length;
  const visit = [];
  let targetNumber = -1;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  
  for (let i = 0; i < n; i++) {
    visit.push(Array(m).fill(false));
  }
  
  const bfs = () => {
    const queue = [];
    
    targetNumber = image[sr][sc];
    queue.push({x: sr, y: sc});
    
    while(queue.length) {
      const pos = queue.shift();
      
      visit[pos.x][pos.y] = true;
      image[pos.x][pos.y] = color;
      
      for (let i = 0; i < 4; i++) {
        const nx = pos.x + dx[i];
        const ny = pos.y + dy[i];
        
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visit[nx][ny] && image[nx][ny] === targetNumber) {
          queue.push({x: nx, y: ny});
        }
      }
    }
  };
  
  bfs();
  
  return image;
};