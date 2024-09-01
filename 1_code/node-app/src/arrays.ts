const arrayNum = [1,2,3,4,5];
const arrayStr = ['a','b','c','d'];
const arryStrNum = [1,2,'a','1','c'];
const arreyBool = [true, false];

//create type
type arryType = number | string | boolean

const arrFunc = (arr:arryType[])=>{
    console.log(`type is: ${typeof arr}`)
}

// arrFunc(arrayNum);
// arrFunc(arrayStr);
// arrFunc(arryStrNum);
// arrFunc(arreyBool);

const arrFunc1 = (arr:object)=>{console.log(`type of ${arr} is ${typeof arr}`)}
// arrFunc1(arrayNum);

//********************************************************************** */
type user = {
    name: string;
    age:number
}

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