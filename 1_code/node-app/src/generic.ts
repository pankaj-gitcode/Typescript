//.1. 'a = raj' we need 'a.toUpperCase()'
//.2. 'b = ['raj',1,2]', b[0].toUpperCase()


type dataType = string | number | boolean;

const identity = (arr:dataType[])=>{
    return typeof arr[0] === 'string'? arr[0].toUpperCase():typeof arr[0]
}
const el1 = identity(['raj',1])
console.log(el1)

// ------------------------------------------------------

const arr = ['kmr','1'];

// const id1 = <T>(arry:T[])=>arry[0].toUpperCase(); =======> it'll throw ERROR type->'T' using as 'string'
const id1 = <T>(arry:T[])=>arry[0];  //==========> arr[0] is T
const id1Val = id1(arr).toUpperCase();  //==========> generic type 'T' converted to 'string' here
console.log(id1Val);