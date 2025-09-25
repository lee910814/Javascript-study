//ECMASCRIPT2015년 이후 함수를 더 간단하게 작성하기 위해 화살표 함수가 사용되기 시작했다.
//(매개변수)=>{함수내용}

//매개변수가 없을 때는 비워둔다.
let hi = function(){
    return `안녕하세요?`;
}
hi();

let hi = () => {return `안녕하세요?`};
hi();

let hi = () => `안녕하세요?`;//함수내용이 한줄이라면 중괄호,return 생략가능 
hi();

//매개변수가 1개 일 때
let hi = function(user){
    console.log(`${user}님, 안녕하세요?`);
}
hi("홍길동");

let hi = user =>console.log(`${user}님, 안녕하세요?`);
hi("홍길동");

//매개변수가 2개 일 때
let hi = function(a,b){
    return a + b;
}
hi(20,30);

let hi = ( a , b ) => a + b;
hi(20,30);