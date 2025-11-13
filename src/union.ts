// union type
// Union Type (|) ব্যবহার করা হয়, যখন কোনো ভ্যারিয়েবল বা ফাংশন একাধিক টাইপের মান ধারণ করতে পারে।
// অর্থাৎ, “এটা হয় এই টাইপের হবে, নয়তো ওই টাইপের।”

// ==============================
//   UNION TYPE
// ==============================

//  একটি ভ্যারিয়ারল একাধিক টাইপের মান নিতে পারে 

let parson : string | number
parson = 'Anamol Hasan'  // ✅ string
parson = 22              // ✔️ number
// person = true;         // ❌ Error: boolean অনুমোদিত নয়

//  union with function

function printId (id: string | number) {
   console.log(`Your id is ${id}`)
}

printId(124)
printId('a234')

// ===============================
// 🔹 INTERSECTION TYPE
// ===============================

// একাধিক টাইপ একত্রে মিশিয়ে নতুন যে টাইপ তৈরি করা হয় তাকে intersection  বলে


// type alias
type Name = {
    name:string
}
type Roll = {
    roll: number
}

//  type intersection
type Student = Name & Roll ;


const student : Student = {
    name:'Anam',
    roll:434
}


// ===============================
// 🔹 LITERAL TYPE
// ===============================

// কোনো ভ্যারিয়েবল কেবল নির্দিষ্ট মানগুলোই নিতে পারবে

let status : 'success' | 'error' | 'pending'

status = 'success';
status = 'pending'
// status = "failed"; // ❌ Error



// ===============================
// 🔹 Function + Union + Literal একসাথে
// ===============================

function responseMessage(status:'success'|'error', code:number|string){
    if(status === 'success'){
        console.log(`operation successfully code ${code}`)
    }else {
        console.log(`operation filed error ${code}`)
    }
}

responseMessage('success',200)
responseMessage('error','A402')



// ===============================
// 🔹 Intersection + Union Example
// ===============================

type Admin = {
    name:string;
    role:'admin'
}
type User = {
    name:string;
    role:'user'
}

// Manager টাইপ হলো Admin এবং User দুটো মিলিয়ে (intersection)

type Manager = Admin | User ;

const manager : Manager = {
    name:'Rakib',
    role:'user'

}