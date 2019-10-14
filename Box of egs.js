let num = 30;

let result =  0;
if (num % 8 === 0){
result = num / 8;
}
else if(num % 6 === 0){
    result = num / 6;
}
else {
    result = num % 6;
    let remainder = num - (num %  6) * 6;
    if(remainder % 8 === 0){
        result +=(remainder / 8);
    }
    else{ result = 0;}
}

console.log(result)
