function calcSum(n){
    let sum =0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(`1과 ${n}의 합하면 ${sum}입니다`)
}
calcSum(10);