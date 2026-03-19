let marks = 100
if (marks >= 0 && marks <= 100) {
    if (marks >= 90) {
        console.log('Your grade is A')
    }
    else if (marks >= 75 && marks < 90) {
        console.log('Your grade is B')
    }
    else if (marks >= 50 && marks < 75) {
        console.log('Your grade is C')
    }
    else {
        console.log('Fail')
    }
}
else{
    console.log('Invalid marks entered.')
}