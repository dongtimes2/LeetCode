function maxAreaOfIsland(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  
  const visit = [];
  for (let i = 0; i < n; i++) {
    visit.push(Array(m).fill(false));
  }
  
  let result = 0;
  
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  
  const queue = [];
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visit[i][j]) {
        let count = 0;
        queue.push({x: i, y: j});
        
        while (queue.length) {
          const node = queue.shift();
          if (visit[node.x][node.y]) continue;
          
          visit[node.x][node.y] = true;
          count++;
          console.log(node.x, node.y, count);
          
          for (let k = 0; k < 4; k++) {
            const nx = node.x + dx[k];
            const ny = node.y + dy[k];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visit[nx][ny] && grid[nx][ny] === 1) {
              queue.push({x: nx, y: ny});
            }    
          }
        }
        
        result = count > result ? count : result;
      }    
    }
  }
  
  return result;
};