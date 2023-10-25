function garbageCollection(garbage: string[], travel: number[]): number {
  let metal = 0;
  let paper = 0;
  let glass = 0;
  
  let metalLimit = null;
  let paperLimit = null;
  let glassLimit = null;
  
  for (let i = 0; i < garbage.length; i++) {
    if (garbage[i].includes("M")) {
      metalLimit = i;
    }
    
    if (garbage[i].includes("P")) {
      paperLimit = i;
    }
    
    if (garbage[i].includes("G")) {
      glassLimit = i;
    }
  }
  
  
  for (let i = 0; i < garbage.length; i++) {
    if (garbage[i].includes("M")) {
      metal += garbage[i].split('').filter(word => word === "M").length;
    }
    
    if (garbage[i].includes("P")) {
      paper += garbage[i].split('').filter(word => word === "P").length;
    }
    
    if (garbage[i].includes("G")) {
      glass += garbage[i].split('').filter(word => word === "G").length;
    }
    
    if (metalLimit && i < metalLimit) {
      metal += travel[i] ?? 0;
    }
    
    if (paperLimit && i < paperLimit) {
      paper += travel[i] ?? 0;
    }
    
    if (glassLimit && i < glassLimit) {
      glass += travel[i] ?? 0;
    }
      
    console.log(i,"회차", metal, paper, glass);
    
  }
  
  console.log(metal, paper, glass);
      
  return metal + paper + glass;
};