function sendData() {
    // if($('.text_hd:text').val()==""){  //값 구할때는 val 함수
    // //     alert("제목을 입력해주세요.");
    // //     $('.text_hd').focus();
    // //     return false; //함수의 종료.
    // // }

    if($('.text_pwd:password').val()==""){ 
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    alert("수정되었습니다.")
    location.href='05.Main_Board_ARp01.html';
}
