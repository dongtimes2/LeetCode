function destCity(paths: string[][]): string {
  const start = [];
  const end = [];
  
  for (let i = 0; i < paths.length; i++) {
    start.push(paths[i][0]);
    end.push(paths[i][1]);
  }
  
  for (let i = 0; i < paths.length; i++) {
    if (start.indexOf(end[i]) === -1) {
      return end[i];
    }
  }
};