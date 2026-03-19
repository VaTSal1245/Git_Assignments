let storedUsername='vatsal'
let enterUsername='vatsal'
let storedPassword='abc'
let enterPassword='abc'

if(storedUsername!=enterUsername && storedPassword!=enterPassword){
    console.log("Both are incorrect")
}
else if(storedUsername === enterUsername && storedPassword!=enterPassword){
    console.log("Incorrect Password")
}
else if(storedUsername != enterUsername && storedPassword === enterPassword){
    console.log("Incorrect Username")
}
else {
    console.log("Login Successfull!")
}