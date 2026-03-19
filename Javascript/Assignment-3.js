let number = 4

if (number >= 0) {
    if (number % 2 == 0) {
        console.log(`The number ${number} is positive and even.`)
    }
    else {
        console.log(`The number ${number} is positive and odd.`)
    }
}
else if(number<0){
    if (number % 2 == 0) {
        console.log(`The number ${number} is negative and even.`)
    }
    else {
        console.log(`The number ${number} is negative and odd.`)
    }
}
else{
    console.log(`Invalid input`)
}