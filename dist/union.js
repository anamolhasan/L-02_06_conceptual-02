"use strict";
// union type
// Union Type (|) ব্যবহার করা হয়, যখন কোনো ভ্যারিয়েবল বা ফাংশন একাধিক টাইপের মান ধারণ করতে পারে।
// অর্থাৎ, “এটা হয় এই টাইপের হবে, নয়তো ওই টাইপের।”
Object.defineProperty(exports, "__esModule", { value: true });
// ==============================
//   UNION TYPE
// ==============================
//  একটি ভ্যারিয়ারল একাধিক টাইপের মান নিতে পারে 
let parson;
parson = 'Anamol Hasan'; // ✅ string
parson = 22; // ✔️ number
// person = true;         // ❌ Error: boolean অনুমোদিত নয়
//  union with function
function printId(id) {
    console.log(`Your id is ${id}`);
}
printId(124);
printId('a234');
const student = {
    name: 'Anam',
    roll: 434
};
// ===============================
// 🔹 LITERAL TYPE
// ===============================
// কোনো ভ্যারিয়েবল কেবল নির্দিষ্ট মানগুলোই নিতে পারবে
let status;
status = 'success';
status = 'pending';
// status = "failed"; // ❌ Error
// ===============================
// 🔹 Function + Union + Literal একসাথে
// ===============================
function responseMessage(status, code) {
    if (status === 'success') {
        console.log(`operation successfully code ${code}`);
    }
    else {
        console.log(`operation filed error ${code}`);
    }
}
responseMessage('success', 200);
responseMessage('error', 'A402');
const manager = {
    name: 'Rakib',
    role: 'user'
};
//# sourceMappingURL=union.js.map