class ParkingSystem {
    bigSize: number;
    bigCount: number;
    mediumSize: number;
    mediumCount: number;
    smallSize: number;
    smallCount: number;

    constructor(big: number, medium: number, small: number) {
      this.bigSize = big;
      this.bigCount = 0;
      this.mediumSize = medium;
      this.mediumCount = 0;
      this.smallSize = small;
      this.smallCount = 0;
    }

    addCar(carType: number): boolean {
      if (carType === 1) {
        if (this.bigCount < this.bigSize) {
          this.bigCount++;
          return true
        } else {
          return false;
        }
      } else if (carType === 2) {
        if (this.mediumCount < this.mediumSize) {
          this.mediumCount++;
          return true
        } else {
          return false;
        }
      } else {
        if (this.smallCount < this.smallSize) {
          this.smallCount++;
          return true
        } else {
          return false;
        }
      }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */