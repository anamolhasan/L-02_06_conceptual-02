let age: number = 20
// age = 20.4;

let name: string = 'Anam'


let isShopOpen : boolean = true

var a;
console.log(a)


let box: any = 2

let student : unknown = 'Anam'

if(typeof student === 'string'){
    console.log(student.toUpperCase())
}


//   Generic  //

function greet <T>(value:T):T{
    return value;
}

let result = greet<string>('GM')
let num = greet<number>(2)
console.log(result, num)

function getFirstIndex <T>(arr:T[]):T | undefined {
   return arr[0]
}

let numb = getFirstIndex<number>([30,33])
let names = getFirstIndex<string>(['Rifat', 'Shuvo'])
console.log(numb, names)