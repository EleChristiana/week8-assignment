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