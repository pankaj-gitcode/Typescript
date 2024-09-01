const func1 = (a:number)=>{
    console.log(`a: ${a}`)
    if(a>0){
        return true
    }
    else{return false}
}

console.log(func1([-1,0,1,2,3][Math.floor(Math.random()* [-1,0,1,2,3].length )]));