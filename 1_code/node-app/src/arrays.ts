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