let a = ''

if(a){
    console.log('I am truthy')
}
else{
    console.log('I am Falsy')
}









//Except these other any value assign to a will return truthy values as output
// false
// e (zero)
// -e (minus zero)
// en (Biglnt zero)
// '',"",`` (empty string)
// null
// undefined

if(false===""){
    console.log('a')
}