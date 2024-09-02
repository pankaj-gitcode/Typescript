type userInfo = {
    name: string;
    age:number;
}

const userFunc = (user1:userInfo, user2:userInfo)=>{
    return [user1.age , user2.age]
}

const userDetails = userFunc(
    {name:'raj', age:21}, 
    {name:'mac', age:22}
)

// console.log(userDetails);
//---------------------------------------------------

interface UserPickType {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}


//upadated type
type updatedPickType = Pick<UserPickType, 'name' | 'age' | 'password'>

const pickFunc = (arr:updatedPickType )=>{console.log(arr)}
pickFunc({name:'raj', age:21,password: '123'})