function myAlert() {
    alert("나는 알림박스야");
}

function myConfirm() {
    var re = document.getElementById("re");
    var result = confirm("확인해주세요");
    if (result) {
        // 확인 버튼을 눌렀을 때 이부분을 수행
        re.innerHTML = "확인";
    } else {

        re.innerHTML = "취소";
    }
}

function myPrompt() {
    var reProm = document.getElementById("reProm");
    var resultProm = prompt("이름을 입력해주세요");

    // reProm.innerHTML = resultProm;

    // && AND연산, || OR연산
    if (resultProm == null) {
        // 사용자가 취소버튼을 눌렀을 때 수행
        reProm.innerHTML = "입력을 취소하셨습니다.";

    }else if(resultProm == "") {
        // 사용자가 입력값이 ""공백일 때 수행 
        reProm.innerHTML = "값을 입력하지 않았습니다."

    }else {
        // 사용자가 값을 입력했을 때
        reProm.innerHTML = resultProm; + "님 안녕하세요"
    }
}