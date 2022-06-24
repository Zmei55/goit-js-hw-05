class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price } = car) {
    console.log('maxSpeed: ', maxSpeed);
    console.log('speed: ', speed);
    console.log('isOn: ', isOn);
    console.log('distance: ', distance);
    console.log('price: ', price);
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.isOn = isOn;
    this.distance = distance;
  }

  get getPrice() {
    return this.price;
  }

  set newPrice(newPrice) {
    this.price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
