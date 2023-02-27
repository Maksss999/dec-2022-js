function Cas(model, maker, year, maxSpeed, engine) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
}

Cas.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
let car = new Cas('mazd', 'mazd', '33', '664', '94892');
car.drive();