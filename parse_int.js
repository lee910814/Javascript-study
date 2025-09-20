const num1 = parseInt(prompt("숫자를 입력해주세요"));
const num2 = parseInt(prompt("숫자를 입력해주세요"));

if(num1 % 2 == 0 && num2 %2 ==0){
    document.write("num1 과 num2는 짝수입니다.");
}else{
    document.write("짝수가 아닌 수가 있습니다.")
}
