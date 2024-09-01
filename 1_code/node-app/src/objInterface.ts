
//create type for the Object
interface User {
    firstName: string,
    lastName: string,
    age: number
    email?: string
}

//Object user
const user = {
    firstName: 'Raj',
    lastName: 'kmr',
    age:21,
    email: 'raj@mail.com'
}

//create isLegal function
const isLegal = (user:User)=>{
    if(user.age > 18){
        console.log(`Hi ${user.firstName}`)
        return true
    }
    else{return false}
}

const greet = (user: User)=>{
    console.log(`Hi ${user.firstName}`);
}

console.log(isLegal(user), greet(user));