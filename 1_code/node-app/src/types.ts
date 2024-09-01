type Users = {
    name: string,
    age: number;
    phrase: string
}


const greet1 = (user: Users)=>{
    console.log(`${user.phrase} ${user.name} you're ${user.age} old!`)
}

greet1({phrase:'hi', name:'Raj', age:21})

interface User2 {
    name: string,
    age: number;
    email?: string
}

const greet2 = (user:User2)=>{
    console.log(`hi ${user.name} you're e-mail is: ${user.email}`)
}
console.log(greet2({name: 'Kmr', email: 'kmr@mail.com',age:21}))
