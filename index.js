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
