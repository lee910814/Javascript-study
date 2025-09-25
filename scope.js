//변수를 특정영역에서만 사용할 수 있는 것은 지역 스코프한다.


function sum(a,b){
    var result = a + b;
}
console.log(result);//sum함수에서 선언되었으므로 result변수는 함수스코프를 가지고,함수를 벗어나면 스코프는 사라진다.
                    //함수밖에서 result변수를 사용하면 에러가 발생함 