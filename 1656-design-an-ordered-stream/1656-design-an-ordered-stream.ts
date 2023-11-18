class OrderedStream {
    arr: string[];
    ptr: number;

    constructor(n: number) {
      this.arr = new Array(n);
      this.ptr = 0;
    }

    insert(idKey: number, value: string): string[] {
      this.arr[idKey - 1] = value;
      
      if (this.ptr === (idKey - 1)) {
        const result = [];
        
        for (let i = this.ptr; !!this.arr[i]; i++) {
          result.push(this.arr[i]);
          this.ptr++;
        }
        return result;
      } else {
        return [];
      }
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */