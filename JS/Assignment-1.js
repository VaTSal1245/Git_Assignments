//Assignment 1: Smart Discount Calculator
let username='Vatsal Shah'
let age=18
let purchaseAmt=6000.00

if(age<18){
    purchaseAmt=purchaseAmt-purchaseAmt*0.10
    console.log(`Hi ${username}! You received a total discount of 10%. Final amount: ₹${purchaseAmt}`)
}
else if(age<18 && purchaseAmt>5000){
    purchaseAmt=purchaseAmt-purchaseAmt*0.15
    console.log(`Hi ${username}! You received a total discount of 15%. Final amount: ₹${purchaseAmt}`)
}
else if(age>=60 && purchaseAmt>5000){
    purchaseAmt=purchaseAmt-purchaseAmt*0.25
    console.log(`Hi ${username}! You received a total discount of 25%. Final amount: ₹${purchaseAmt}`)
}
else if(age>=60){
    purchaseAmt=purchaseAmt-purchaseAmt*0.20
    console.log(`Hi ${username}! You received a total discount of 20%. Final amount: ₹${purchaseAmt}`)
}
else if(purchaseAmt>5000){
    purchaseAmt=purchaseAmt-purchaseAmt*0.05
    console.log(`Hi ${username}! You received a total discount of 5%. Final amount: ₹${purchaseAmt}`)
}
else{
    console.log(`Hi ${username}! You received a total discount of 0%. Final amount: ₹${purchaseAmt}`)
}
