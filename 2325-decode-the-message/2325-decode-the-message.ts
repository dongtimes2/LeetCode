function decodeMessage(key: string, message: string): string {
  const data = new Map();
  let alphabetCode = 0;
  let result = "";
  
  for (let i = 0; i < key.length; i++) {
    if (!data.has(key[i]) && key[i] !== ' ') {
      data.set(key[i], alphabetCode++);
    } 
  }
  
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      result += message[i];
    } else {
      result += String.fromCharCode(data.get(message[i]) + 97);      
    }
  }
  
  return result;
};