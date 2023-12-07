function evenNum (num){

  if(num % 2 == 0){
    return true;
}


else{
    return false;
}

}
console.log(evenNum(2));
console.log(evenNum(3));
console.log(evenNum(4));
console.log(evenNum(5));
console.log(evenNum(6));
console.log(evenNum(7));
console.log(evenNum(8));



function range(n1, n2){
    for(let i=n1; i <= n2; i++){
        console.log(i)
    }
}

range(1,5);
range(10,15);



function sumBtw(n1,n2){
    let sum = 0
    for(let i = n1+1; i < n2; i++){
        sum +=i
    }
    return sum;
}

console.log(sumBtw(1,5));
console.log(sumBtw(10,15));

function factorial (num1){
    let sum = 1
    for(let i = 1; i <= num1; i++){
       sum *=i;
    }
    return sum
}

console.log(factorial(20));


function tempCoverter (){
    let input = prompt("enter f if fahenrient and c if celcius");
    if(input == f){
        let f = 10;
        return(f-32)*5/9
    }else{
        let c = 20;
        return(c*9/5)+32
    }
}

console.log(tempCoverter(10));

tempCoverter(20)