"use strict";
// number =	সংখ্যার মান বোঝাতে ব্যবহৃত হয়।	let age: number = 25
// string =	টেক্সট বা লেখা বোঝাতে ব্যবহৃত হয়।	let name: string = "Rakib"
// boolean =	কেবল true বা false মান রাখতে পারে।	let isStudent: boolean = true
// null =	কোনো মান না থাকাকে বোঝায় (ইচ্ছাকৃতভাবে খালি)।	let emptyValue: null = null
// undefined =	কোনো ভ্যারিয়েবলে এখনো মান দেওয়া হয়নি।	let x: undefined = undefined
Object.defineProperty(exports, "__esModule", { value: true });
// 🔵 Non-Primitive Data Types
// টাইপ	সংগা	উদাহরণ
// object	একাধিক property সম্বলিত মান (key-value pair)।	const person: {name: string, age: number} = {name: "Rakib", age: 20}
// array	একই টাইপের একাধিক মানের তালিকা।	const items: string[] = ['Egg', 'Milk']
// tuple	নির্দিষ্ট সংখ্যা ও টাইপের মান একসাথে রাখে।	let user: [string, number] = ['Rakib', 20]
// enum	নির্দিষ্ট কিছু মানের নাম দেওয়া লিস্ট।	<pre>enum Direction {Up, Down, Left, Right}
// let move: Direction = Direction.Up</pre>
// any	যেকোনো টাইপের মান রাখতে পারে (টাইপ চেক হয় না)।	let data: any = "Hello" → পরে data = 10 করলেও error হবে না।
// void	কোনো রিটার্ন ভ্যালু নেই এমন ফাংশনে ব্যবহৃত হয়।	<pre>function greet(): void {
// console.log("Hello!")
// }</pre>
// never	যে ফাংশন কখনোই রিটার্ন করে না (error বা infinite loop)।	<pre>function error(): never {
// throw new Error("Something went wrong")
// }</pre>
// unknown	any-এর মতো, কিন্তু টাইপ চেক ছাড়া ব্যবহার করা যায় না।	<pre>let value: unknown = "Hi"
// if (typeof value === "string") console.log(value.toUpperCase())</pre>
// 🟣 Other TypeScript Concepts
// ধারণা	সংগা	উদাহরণ
// literal	নির্দিষ্ট মানকেই অনুমোদন দেয়।	`let status: 'success'
// optional	কোনো property বা parameter থাকা বাধ্যতামূলক নয়।	type User = { name: string, age?: number }
// function	ফাংশনের প্যারামিটার ও রিটার্ন টাইপ নির্ধারণ করে।	function add(a: number, b: number): number { return a + b }
// union	একাধিক টাইপের মধ্যে যেকোনো একটি হতে পারে।	`let id: string
// intersection	একাধিক টাইপ একত্রে মিশিয়ে ব্যবহার করা হয়।	<pre>type A = {name: string}
// type B = {age: number}
// type C = A & B
// const user: C = {name: "Rakib", age: 20}</pre>
// alias	টাইপের জন্য কাস্টম নাম তৈরি করা হয়।	type Person = {name: string, age: number}
// generic	পুনর্ব্যবহারযোগ্য টাইপ তৈরি করতে ব্যবহৃত হয়।	<pre>function identity<T>(value: T): T {
// return value
// }
// identity<string>("Hello")</pre>
// rest & spread	rest: একাধিক আর্গুমেন্ট সংগ্রহ করে।
// spread: কোনো array/object এর মান ছড়িয়ে দেয়।	<pre>function sum(...nums: number[]) {
// return nums.reduce((a,b)=>a+b,0)
// }
// const arr = [1,2,3]
// const newArr = [...arr, 4]</pre>
// ternary	if-else এর সংক্ষিপ্ত রূপ।	let result = age > 18 ? "Adult" : "Child"
//# sourceMappingURL=typescriptDoc.js.map