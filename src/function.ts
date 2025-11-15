function greet(name:string):string{
    return `Hello ${name}`
}

// console.log(greet('Anam'))


// function student(name:string, roll:number):string:number{
//     return `student name ${name} roll ${roll}`
// }

// console.log('Anam',253)


function UC(arr:string[], minLength:number):string[]{
    // let toUpper = arr.map((item) => item.toUpperCase())
    // return toUpper
    return arr.filter((word) => word.length >= minLength)
}
const cities = ['dhaka', 'rajshahi']
console.log(UC(cities,3))
