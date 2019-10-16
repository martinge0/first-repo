let result = 0;

function digitsGet(num){
    let digits = num.toString().split('');
    let realDigits = digits.map(Number)
    return realDigits;
}

for (let number = 1; number <= 2019; number++){
let check = 0;
let digit = digitsGet(number);
    for(let i = 0; i < digit.length; i++){
        if(digit[i] % 2 !==0){
            check++;
        }
    }
    if(check % 2 !==0){
        result++
    }
}

console.log(result);
