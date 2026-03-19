let isMember = true
let cartValue=2000
if(isMember==true && cartValue>1000){
    console.log('You are eligible for free delivery!')
}
else if(cartValue>2000){
    console.log('You are eligible for free delivery!')
}
else{
    console.log('Not Eligible for free delivery. Please add more items!')
}