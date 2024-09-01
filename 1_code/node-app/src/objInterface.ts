
// const user = {
//     firstName: "Raj",
//     lastName: "kmr",
//     age:21,
//     email: "raj@mail.com"
// }

//create isLegal function
const isLegal = (user: {firstName: string, age:number})=>{
    if(user.age > 18){
        console.log(`Hi ${user.firstName}`)
        return true
    }
    else{return false}
}

const greet = (user: {firstName:string})=>{
    console.log(`Hi ${user.firstName}`);
}

console.log(isLegal({firstName:'Raj', age:21}), greet({firstName:'kmr'}));