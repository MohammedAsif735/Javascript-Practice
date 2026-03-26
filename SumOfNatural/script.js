function getSum(n){
        let sum = 0;
    for(let i=1;i<=n;i++){
         sum+=i;
    }
    return sum;
}
let num = prompt("enter a number: ");
let result  = getSum(num);
alert(`The sum of Natural number is : ${result}`);

