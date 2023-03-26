/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  // ✨ implement
  const copyObj = {...obj}
  for(let key in copyObj) {
    copyObj[key] = copyObj[key].trim();
}
  return copyObj;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  // const copyObj = {...obj}
  for(let key in obj) {
    obj[key] = obj[key].trim();
}
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement
  let max = integers[0].integer
  for (let idx = 1; idx < integers.length; idx++) {
    if (integers[idx].integer > max) {
      max = integers[idx].integer;
    }
  }
  return max
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
      this.initialNumber = initialNumber;
      this.count = initialNumber + 1;
    }
    

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    this.count--
    if (this.count === this.initialNumber) {
      return this.initialNumber
    } else {
      if (this.count <= 0) {
        return 0
      }
      return this.count
    }
  }
}
// let counter = new Counter(3)
// console.log(counter.countDown())
// console.log(counter.countDown())
// console.log(counter.countDown())
// console.log(counter.countDown())
// console.log(counter.countDown())

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.initialSeason = 'summer'
    this.season = ''
    this.nextSeason = ''
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    if (!this.season) {
      this.nextSeason = 'fall'
      this.season = 'summer'
      return this.initialSeason;
    } else if (this.nextSeason === 'fall') {
      this.season = 'fall'
      this.nextSeason = 'winter'
      return this.season;
    } else if (this.nextSeason === 'winter') {
      this.season = 'winter'
      this.nextSeason = 'spring'
      return this.season;
    } else if (this.nextSeason === 'spring') {
      this.season = 'spring'
      this.nextSeason = 'summer'
      return this.season;
    } else if (this.nextSeason === 'summer') {
      this.season = 'summer'
      this.nextSeason = 'fall'
      return this.season;
    }
  }
}

// const seasons = new Seasons()
// console.log(seasons.next())
// console.log(seasons.next())
// console.log(seasons.next())


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.name = name
    this.mpg = mpg
    this.currentTank = tankSize
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
    if (this.currentTank === 0) {
      console.log('out of gas')
      return this.odometer
    }
    if (distance > this.currentTank * this.mpg) {
      let ranOut = Math.floor(distance - (this.currentTank * this.mpg))
      this.currentTank = 0
      console.log(`ran out of gas after ${ranOut} miles`)
      this.odometer = this.odometer + ranOut
      return this.odometer;
    }
    this.odometer = this.odometer + distance
    const gasUsed = distance / this.mpg
    this.currentTank = this.currentTank - gasUsed;
    return this.odometer;
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
    if (this.currentTank + gallons > this.tank) {
      this.currentTank = this.tank
      return this.currentTank * this.mpg;
    }
    this.currentTank = this.currentTank + gallons
    return this.currentTank * this.mpg;
  }
}
// const focus = new Car('focus', 20, 30)
//    focus.drive(100) // returns 100
//    focus.drive(100) // returns 200
//    focus.drive(100) // returns 300
//    focus.drive(200) // returns 500
//    focus.drive(200) // returns 500
// console.log(focus.odometer)
//   focus.drive(100)
//   console.log(focus.refuel(14))
//   console.log(focus.drive(100))
  


/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
