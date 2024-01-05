function allPathsSourceTarget(graph: number[][]): number[][] {
  const result = [];
  
  const dfs = (node: number[], num: number, arr: number[]) => {
    console.log(node, num, arr);
    if (num === graph.length - 1) {
      result.push(arr);
      return;
    }
   
    for (const next of node) {
      dfs(graph[next], next, [...arr, next]);  
    }
    
    
  }; 
  
  dfs(graph[0], 0, [0]);
  
  return result;
};