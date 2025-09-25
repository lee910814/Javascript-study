function multiple(a,b=5, c=10){//함수선언할때부터 매개변수 기본값을 정할 수 있다.
    return a *b +c;
}

console.log(multiple(10,30,40))//a:10, b:30, c:40
console.log(multiple(20.30))//a:20 , b:30, c:10(default)
console.log(multiple(20))//a:20, b:5, c:10