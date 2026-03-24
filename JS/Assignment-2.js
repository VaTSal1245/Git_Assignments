// JavaScript Assignment – 2
// 1: Student Report System
// const student=[
//     { name: 'Rohan', marks: [85,67,79] },
//     { name: 'Mohan', marks: [10,70,99] },
//     { name: 'Sohan', marks: [0,64,69] },
// ];

// const avgMarks= student.map(a=>{
//     const total=a.marks.reduce((total,num)=> total+num,0); 
//     return total/a.marks.length;
// })

// avgMarks.forEach(element => {
//     if(element>=75){
//     console.log("Distinction")
// }
// else if(element>=50 && element<75){
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }    
// });

//2: Shopping Cart Analyzer
// function totalBill(amount,...items){
//     let quantity=0;
//     for (let count of items)
//         quantity++

//     amount=amount*quantity
//     return {amount,quantity}
// }

// totalBill(20,"phone","gadgets","accessories")
// console.log(totalBill(20,"phone","gadgets","accessories"))

//3: User Profile Updater
// const User = {
//     name: 'Vatsal',
//     city: 'Vadodara'
// }

// function profileUpdate() {
//     User.city = 'Baroda'
// }

// console.log(User)
// profileUpdate()
// console.log(User)
// const UserUpdate = { ...User, Profession: 'Software-Engineer' }
// console.log(UserUpdate)


//4: Product Filter & Transform
const products=[
    {Productname: 'Mobile-Phone-1', price: 10000},
    {Productname: 'Vegetables', price: 408},
    {Productname: 'gadget', price: 1000} 
]

const filterP=products.filter(p=>p.price>1000)
console.log(filterP)
const discount=products.map(p=> ({
    ...p,
    discountedPrice: p.price-p.price*0.1
}));
console.log(discount)


//5: Dynamic Number Processor
// let array=[1,2,3,4,5,6,7,8,9,10]
// const even=array.filter(num=>(num%2==0))
// const odd=array.filter(num=>(num%2!=0))

// console.log(`Even number array: ${even}`)
// console.log(`Odd number array: ${odd}`)

// let sumEven=0
// let sumOdd=0
// even.forEach(element => {
//     sumEven=sumEven+element;
// });
// odd.forEach(element => {
//     sumOdd=sumOdd+element;
// });

// console.log(`Sum of even number: ${sumEven}`)
// console.log(`Sum of odd number: ${sumOdd}`)
