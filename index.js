// 1. Global scope
// 2. Function -> arrow function || simple function
// 3. call, apply, bind
// 4. Function constructors

// ------------------------------------------------------------------------ //
// 1. Global scope

// 'use strict';

// console.log(this)

// ------------------------------------------------------------------------ //
// 2. Function -> arrow function || simple function

// 'use strict';

// function foo() {
//     const arrowFunc = () => {
//         console.log(this)            // Где было проинициализирована
//     }
//     arrowFunc()
// }
//
// foo()

// simple function

// 'use strict';                        // this будет undefined

// function foo() {
//     console.log(this)                   // Где вызывается. Будет объект window
// }

// foo()

// let car = {
//     brand: 'bmw',
//     startEngine() {
//         console.log(`start ${this.brand}`);
//     }
// }
//
// const car2 = car
// car = null
//
// car2.startEngine()

// function startEngine() {
//     console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = startEngine
// car2.f = startEngine
//
// car1.f()
// car2.f()

// let car = {
//     brand: 'bmw',
//     startEngine: () => {
//         console.log(`start ${this.brand}`);
//     }
// }
//
// car.startEngine();

// ------------------------------------------------------------------------ //
// 3. call, apply, bind

// const car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
//         // console.log(`Start ${this.brand}`);
//         console.log(this.speed);
//     }
// }
//
// const scooter = {
//     brand: 'honda',
//     speed: 60
// }
//
// const ferrari = {
//     brand: 'ferrari',
//     speed: 300
// }

// car.showMaxSpeed.call(scooter, 10, 20) // call вызывает первый переданный аргумент
// car.showMaxSpeed.apply(scooter, [10, 20]) // apply забирает первый переданный аргумент // аргументы передаются как массив

// car.showMaxSpeed.bind(scooter, 10, 20)() // возвращает функцию-обертку
// car.showMaxSpeed.bind(scooter).call(ferrari);

// нельзя изменить контекст больше одного раза
// стрелочную функцию переопределить нельзя

// const car = {
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
        // console.log(this.speed);
    // }
// }

// setTimeout(car.showMaxSpeed.bind(car), 1000);
// setTimeout(car.showMaxSpeed.bind(car), 1000);

// ------------------------------------------------------------------------ //
// 4. Function constructors


