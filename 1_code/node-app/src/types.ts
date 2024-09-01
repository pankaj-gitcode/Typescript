

type Users = {
    name: string,
    age: number;
    phrase: string
}


const greet1 = (user: Users)=>{
    console.log(`${user.phrase} ${user.name} you're ${user.age} old!`)
}


interface User2 {
    name: string,
    age: number;
    email?: string
}

const greet2 = (user:User2)=>{
    console.log(`hi ${user.name} you're e-mail is: ${user.email}`)
}
// greet1({phrase:'hi', name:'Raj', age:21});
// greet2({name: 'Kmr', email: 'kmr@mail.com',age:21});

// *********************************** UNION ***************************************************


type strOrNum = string | number
const stringOrNum = (id: strOrNum)=>{console.log(`id is ${id} & type: ${typeof id}`)}
stringOrNum(1);
stringOrNum("1");
