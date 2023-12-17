class FoodRatings {
    private foods: string[];
    private cuisines: string[];
    private ratings: number[];

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
      this.foods = foods;
      this.cuisines = cuisines;
      this.ratings = ratings;
    }

    changeRating(food: string, newRating: number): void {
      const index = this.foods.indexOf(food);
      this.ratings[index] = newRating;
    }

    highestRated(cuisine: string): string {
      let result = [];
      let max = -1;
      
      for (let i = 0; i < this.cuisines.length; i++) {
        if (this.cuisines[i] === cuisine && max <= this.ratings[i]) {
          if (max === this.ratings[i]) {
            result.push(this.foods[i]);
          } else {
            max = this.ratings[i];
            result = [this.foods[i]];
          }
        }
      }
      
      result.sort();
      return result[0];
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */