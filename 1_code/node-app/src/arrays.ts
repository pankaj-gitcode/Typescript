const arrayNum = [1,2,3,4,5];
const arrayStr = ['a','b','c','d'];
const arryStrNum = [1,2,'a','1','c'];
const arreyBool = [true, false];

//create type
type arryType = number | string | boolean

const arrFunc = (arr:arryType[])=>{
    console.log(`type is: ${typeof arr}`)
}

arrFunc(arrayNum);
arrFunc(arrayStr);
arrFunc(arryStrNum);
arrFunc(arreyBool);

//********************************************************************* */
const arrFunc1 = (arr:[...typeof arrayNum])=>{console.log(`type of ${arr} is ${typeof arr}`)}
arrFunc1(arrayNum);

//********************************************************************** */

const emp = (arr: user[])=>{
    //filter out the user having ag>18
    
    return arr.filter(elem=>elem.age > 18);
}

const empFunc = emp([
    {name: 'Raj',age:21}, 
    {name: 'Kmr',age:2}, 
    {name: 'Mac',age:3}
])

console.log(empFunc)
type user = {
    name: string;
    age:number
}


// ------------------------------------------------
const obj1 = [
    {name:'raj123', age:21},
    {above18: true},
    {email: 'raj123@MediaList.com'}
]

//type
type dataTypeObj = string | number | boolean

type dataTypeObj1 = {
    name: string,
    age: number, 
    above18: boolean,
    email: string,
}
type dataTypeObj1Partial = Partial<dataTypeObj1>;

const obj1Func = (arr:dataTypeObj1Partial[])=>{
    arr.map(elem=>console.log(`Hi ${elem.name?? 'unknown'} you're above 18 ${elem.above18??'uknwnown'} since you're age is: ${elem.age??'unknown'} & you're email is: ${elem.email?? 'unknown'}`))
    
}

obj1Func(obj1);