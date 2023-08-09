// // Decorator cho phương thức
// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   console.log(target);

//   descriptor.value = function (...args: any[]) {
//     console.log(
//       `Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`
//     );

//     const result = originalMethod.apply(this, args);
//     console.log(`Result: ${result}`);
//     return result;
//   };
// }

// class Calculator {
//   name: string;
//   constructor() {
//     this.name = "abc";
//   }
//   @log
//   add(a: number, b: number): number {
//     console.log(this.hehe());
//     return a + b;
//   }
//   hehe() {
//     return "hehe";
//   }
// }
// let calc = new Calculator();

// Output will show logs before and after method execution

class Test {
  obj: any;
  constructor() {
    this.obj = {
      name: "Bao",
      func() {
        console.log("haha");
      },
    };
    this.obj.func();
  }
}

let test = new Test();
console.log(test);
console.log("haha");
console.log("hihi");
console.log("1");
console.log("2");
