function sendData() {
    if($('.text_hd:text').val()==""){  //값 구할때는 val 함수
        alert("제목을 입력해주세요.");
        $('.text_hd').focus();
        return false; //함수의 종료.
    }
    // var section = $('.text_sct:text').val(); //변수값 생성
    // if(section == ""){  
    //     alert("내용을 입력해주세요.");
    //     $('.text_sct').focus();
    //     return false;
    // }

    if($('.text_pwd:password').val()==""){ 
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    alert("새로운 글이 작성되었습니다.")
    location.href='08.Main_FAQ_AR_RP.html';
}
    // function page_href() {
    //     alert("새로운 글이 작성되었습니다.")
    //     location.href = "05.Main_Board_ARp01.html";
        
    //     }
    // alert("새로운 글이 작성되었습니다.").location.href='05.Main_Board_ARp01.html';

//     $('.btn_write').on("click", function(){
//         if($('.text_hd:text').val()==""){  //값 구할때는 val 함수
//             alert("제목을 입력해주세요.");
//             $('.text_hd').focus();
//             return false; //함수의 종료.
//         }
//         var section = $('.text_sct:text').val(); //변수값 생성
//         if(section == ""){  
//             alert("내용을 입력해주세요.");
//             $('.text_sct').focus();
//             return false;
//         }

//         if($('.text_pwd:password').val()==""){ 
//             alert("비밀번호를 입력해주세요.");
//             return false;
//         }
//         alert("새로운 글이 작성되었습니다.");

//     });

// };

// $(function(){

//     $('.btn_write').click(function(){
    //     invalidItem();
    //     clearInput();
    // });

    // // 버튼을 누르면 아래 함수가 생성되어 불려진다.

    // function clearInput(){
    //     $('.text_hd').val(''); // val() 가져오는것, 안에 써놓으면 입력하는 것.ㅣ
    //     $('.text_sct').val('');
    //     $('.pwd').val('');
    // //    $('#pwdConfirm').val('');
    // }

    // function invalidItem(){
        // if($('.text_hd').val()==""){  //값 구할때는 val 함수
//             alert("제목을 입력해주세요.");
//             $('.text_hd').focus();
//             return false; //함수의 종료.
//         }
//         var section = $('.text_sct').val(); //변수값 생성
//         if(section == ""){  
//             alert("내용을 입력해주세요.");
//             $('.text_sct').focus();
//             return false;
//         }

//         if($('.text_pwd').val()==""){ 
//             alert("비밀번호를 입력해주세요.");
//             return false;
//         }

//         // if($('#pwd:password').val() != $ // ! 좌우 같은지?
//         // ('pwdConfirm:password').val()==""){
//         //     alert("암호가 일치하지 않습니다.");
//         //     return;
//         // }

//         alert("새로운 글이 작성되었습니다.");

//     });

// });