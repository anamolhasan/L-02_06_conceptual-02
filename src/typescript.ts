// ===============================
// 🔹 Primitive Types
// ===============================

let age: number = 25;
let name: string = "Rakib";
let isStudent: boolean = true;
let emptyValue: null = null;
let notDefined: undefined = undefined;

// ===============================
// 🔹 Non-Primitive Types
// ===============================

// Object
const person: { name: string; age: number } = {
  name: "Rakib",
  age: 20,
};

// Array
const items: string[] = ["Egg", "Milk", "Bread"];

// Tuple
let user: [string, number] = ["Sakib", 22];

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up;

// Any
let data: any = "Hello";
data = 123;

// Void
function greet(): void {
  console.log("Hello, TypeScript!");
}

// Never
function throwError(): never {
  throw new Error("Something went wrong!");
}

// Unknown
let value: unknown = "Hi there!";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// ===============================
// 🔹 Advanced Types
// ===============================

// Literal Type
let status: "success" | "error" = "success";

// Optional Property
type User = {
  name: string;
  age?: number; // optional
};
const user1: User = { name: "Rakib" };

// Function Type
function add(a: number, b: number): number {
  return a + b;
}

// Union Type
let id: string | number = 101;

// Intersection Type
type A = { name: string };
type B = { age: number };
type C = A & B;
const user2: C = { name: "Sadia", age: 21 };

// Type Alias
type Person = {
  name: string;
  age: number;
};
const person2: Person = { name: "Rana", age: 30 };

// Generic Type
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("Hello"));
console.log(identity<number>(2025));

// Rest & Spread Operator
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
const result = sum(1, 2, 3, 4, 5);

const arr = [10, 20, 30];
const newArr = [...arr, 40, 50];

// Ternary Operator
let userAge = 18;
let message = userAge >= 18 ? "Adult" : "Child";
console.log(message);
