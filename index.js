
let firstName = 'Mohamed'
console.log(firstName)

let age =20
console.log(age)

let accepted = true
console.log(accepted)

const value =60
console.log(value)

// Aritmetic Operations
// + - * / % **
let num1 = 2
let num2  =3

let result = num1 + num2
console.log(result)

result = num1 - num2
console.log(result)

result = num1 / num2
console.log(result)

result = num1 * num2
console.log(result)

result = num1 ** 2
console.log(result)

// Assigemnt Operators
// = += -= /= *=

num1+=5 // --> num1 = num1 + 5
console.log(num1)


// Logical Operators 
// && || xor

// Comparison Operators
// == === != > < >= <=

console.log(num1 !== num2)

// Post increment / pre increment
// z++ post
//++z pre
let z =1 
let a = ++z
console.log(z++)
console.log(++z)

// Precednce
/**
 ()
 ++ --
 * /
 + -
 =
 */

 let equ =  + 5 + 6 * (7+8) + a - 9 / 10 
 console.log(equ)

/////////////////////////////////////////////////////////////////////////////

// Conditions

// if(condition){

// }
// else{

// }

// if(condition){

// }
// else if(condition){

// }
// else{

// }


let test =5;
if(test==0){
    console.log('Number is equal to zero')
}
else if(test>10){
    console.log('Number is greater than 10')
}
else{
    console.log('Number is less than 10')
}

//////////////////////////////////////////////////////////////////////////////

document.getElementById('grading').textContent = 'Grading System'

// let n = prompt('Enter your age')
// let m = parseInt(prompt('Enter your grade'))

/**
 A ==> 100 /90
 B ==> 90 /85
 C==> 85 /70
 D ==> 70/60
 F otherwise
 */

 // Sol
//  let studentName = prompt('Enter your name')
//  let mark = parseInt(prompt('Enter your grade'))

//  if(mark <= 100 && mark>=90){
//      document.getElementById('paragraph').textContent = studentName + 'your grade is A'
//  }
//  else if(mark < 90 && mark>=85){
//     document.getElementById('paragraph').textContent = studentName + 'your grade is B'
// }
// else if(mark < 85  && mark>=70){
//     document.getElementById('paragraph').textContent = studentName + 'your grade is C'
// }
// else  if(mark < 70 && mark>=60){
//     document.getElementById('paragraph').textContent = studentName + 'your grade is D'
// }
// else {
//     document.getElementById('paragraph').textContent = studentName + ' your grade is F'
// }
///////////////////////////////////////////////////////////////////////////

// Switch

const country = 'Egypt'
switch(country){
    case "Egypt":
        console.log('It is 20 degress')
        break;
        case "Paris":
            console.log('It is 10 degress')
            break;
            case "London":
                console.log('It is 10 degress')
                break;
                default:
                    console.log('Temp is unsepcified')
}
/////////////////////////////////////////////////////////////////////////////

// for loop

for(let i=0; i<=10; i++){
    if(i%2==0){
        console.log(i + ' is even')
    }

}

// While loop
let i =0
while(i<=10){
    if(i%2==1){
        console.log(i + ' is odd')
    }
    i++
}

/////////////////////////////////////////////////////////////////////////////////////

// Let --> block scope
// Var --> Function scope

// let localVar = 100 
// var localVarr =100

// function someFun(){
//     if(5==5){
//         let localVar = 100
//         console.log(localVar)
//     }
//     console.log(localVar)

//     function nested(){
//         console.log(localVar)
//     }
//     nested()

// }
//console.log(localVar)
// someFun()


// function someFun(){
//     if(5==5){
//         var localVar = 100
//         console.log(localVar)
//     }
//     console.log(localVar)

//     function nested(){
//         console.log(localVar)
//     }
//     nested()

// }
// console.log(localVar)
// someFun()


//////////////////////////////////////////////////////////////////////////////

// Functions

function add(a,b){
    return a+b
}

console.log(add(3,5))

// Arrow Function

let add1 = (a,b) => a+b

console.log(add1(10,10))


// Task

function measures (uName,h,w){
    console.log(uName)
    return h+w
}

////////////////////////////////////////////////////////////////////////////////

let maxNo = (a,b) =>{
    if(a>b)
    {
        return a + ' is greater than' + b
    }
    console.log('Text')
    return a + ' is smaller than' + b
    
}

console.log(maxNo(10,8))

////////////////////////////////////////////////////////////////////////////////////

// Array

let fruits = ['Apple','Orange','Grapes']
console.log(fruits[0])


// For Each

fruits.forEach((el)=>{
  console.log(el)
})

///////////////////////////////////////////////////////////////////////////////////

// Objects

let user = {
    name: 'Ahmed',
    age:20,
    email:'ahmed@gmail.com'
}

// Dot notation
// user.name  = 'Ali'
// console.log(user.name)

// Bracket Notation
// user['name'] = 'Adam'

// let selection = 'name'
// user[selection] = 'Mostafa'

let inputChange = () =>{
    let u = document.getElementById('text').value
    user[u] = document.getElementById('text1').value
    console.log(user)
}

//////////////////////////////////////////////////////////////////////////////////

// ShortHand Property

const uName = 'Ahmed'
const agePerson = 30
let person = {
    uName,
    agePerson,
}
console.log(person)
////////////////////////////////////////////////////////////////////////////////

// Array Of Object
let st = [
    {
        name:'ahmed',
        age:15,
        math:30,
        arabic:20,
        eng:30,
        degress: [30,20,30]
        },
        {
            name:'mostafa',
            age:17,
            math:20,
            arabic:10,
            eng:30,
            degress: [20,10,30]
            },
            {
                name:'mazen',
                age:17,
                math:20,
                arabic:10,
                eng:30,
                degress: [20,10,30]
                }
]

//Sol 
st.forEach((el)=>{
    console.log(el.name)
    sum = 0;
    el.degress.forEach((deg)=>{
        sum+=deg
        //console.log(sum)
    })
    console.log(sum)
})

// ahmed
// mostafa
//80
//60

// Find --> First Ocurrence (Object)
const s = st.find((el)=> el.age ==17)
console.log(s)

// Filter (Array)
const u = st.filter((el)=> el.age ==17)
console.log(u)

//////////////////////////////////////////////////////////////////////////////////////

// Callback

function displayResult(sum){
    console.log('Result ' + sum)
}
function sumClaculation (num1,num2,myCallback){
    let sum = num1 + num2
    myCallback(sum)
}

//sumClaculation(5,5,displayResult)

sumClaculation(5,5,(sum)=>{
    console.log('Result ' + sum)
})

//////////////////////////////////////////////////////////////////////////////

//Async

// console.log('first')
// // const msg = () => console.log('This is a message')
// // setTimeout(msg,2000)

// //Annonyums Function
// setTimeout(()=>{
//     console.log('This is a message')
// },2000)
// console.log('last')
////////////////////////////////////////////////////////////////////////////////

// promises

// let myPromise = new Promise((error,resolve)=>{
//     if(3<2){
//         return resolve('Right')
//     }
//     error('Wrong')
// })

// myPromise.then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
//////////////////////////////////////////////////////////////////////////////////

// Task

// const doWorkPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(5==5) resolve('Things went right')
//         reject('Things went wrong')
//     },2000)

// })

// doWorkPromise.then((result)=>{
//     console.log('Success',result)
// }).catch((err)=>{
//     console.log('Error',err)
// })

//////////////////////////////////////////////////////////////////////////////////

// Async & await 

// let hello = async ()=>{
//     if(5==5){
//         return greeting = await Promise.resolve('Hello')
//     }
//     return greeting = await Promise.reject('Error')
// }

// hello().then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


let hello = async ()=>{
try{
    if(5==5){
        alert( greeting = await Promise.resolve('Hello'))
    }
}
catch(e){
    alert(greeting = await Promise.reject('Error'))
}}

// hello()

///////////////////////////////////////////////////////////////////////////////////

// JSON

let fetchUser = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    }
    catch(e){
        console.log('Errror')
    }
}
fetchUser()


