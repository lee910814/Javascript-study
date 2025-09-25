var hi = "hello"; //전역 변수

function change(){
    hi = "bye";
}

console.log(hi); //"hello"
change();
console.log(hi); //"bye"

//전역변수는 함수의 어디에서나 값을 변경할 수 있습니다.