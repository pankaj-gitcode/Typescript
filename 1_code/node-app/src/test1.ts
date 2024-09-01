const func1 = (a:number)=>{
    console.log(`a: ${a}`)
    if(a>0){
        return "a is +ve"
    }
    else{return "0 or -ve"}
}

console.log(func1([-1,0,1,2,3][Math.floor(Math.random()* [-1,0,1,2,3].length )]));