"use strict";
// ===============================
// 🔹 Primitive Types
// ===============================
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
let name = "Rakib";
let isStudent = true;
let emptyValue = null;
let notDefined = undefined;
// ===============================
// 🔹 Non-Primitive Types
// ===============================
// Object
const person = {
    name: "Rakib",
    age: 20,
};
// Array
const items = ["Egg", "Milk", "Bread"];
// Tuple
let user = ["Sakib", 22];
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
// Any
let data = "Hello";
data = 123;
// Void
function greet() {
    console.log("Hello, TypeScript!");
}
// Never
function throwError() {
    throw new Error("Something went wrong!");
}
// Unknown
let value = "Hi there!";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// ===============================
// 🔹 Advanced Types
// ===============================
// Literal Type
let status = "success";
const user1 = { name: "Rakib" };
// Function Type
function add(a, b) {
    return a + b;
}
// Union Type
let id = 101;
const user2 = { name: "Sadia", age: 21 };
const person2 = { name: "Rana", age: 30 };
// Generic Type
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(2025));
// Rest & Spread Operator
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
const result = sum(1, 2, 3, 4, 5);
const arr = [10, 20, 30];
const newArr = [...arr, 40, 50];
// Ternary Operator
let userAge = 18;
let message = userAge >= 18 ? "Adult" : "Child";
console.log(message);
//# sourceMappingURL=typescript.js.map