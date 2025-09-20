let subject = prompt("과목을 신청하세요.1.HTML 2.CSS 3.JAVASCRIPT")

if(subject!=null){
    switch(subject){
        case "1":
            document.write("HTML을 신청하였습니다.");
            break;
        case "2":
            document.write("css를 선택하셨습니다.");
            break;
        case "3":
            document.write("javascript를 선택하셨습니다.")
            break;
        default:
            alert("아직 신청 전입니다. 신청해주세요")
    }
}