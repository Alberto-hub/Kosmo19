function func_prompt_delete() {
    if(prompt('비밀번호를 입력하시면 삭제됩니다.') ==='1234'){
        alert("삭제되었습니다.");
        location.href='./05.Main_Board_ARp01.html';
    } else {
        alert("비밀번호가 틀렸습니다.");
    }
}

function func_prompt_modify() {
    if(prompt('비밀번호를 입력하시면 수정창으로 이동합니다.') ==='1234'){
        alert("비밀번호가 일치합니다.");
        location.href='./06.Main_Board_AR_MP.html';
    } else {
        alert("비밀번호가 틀렸습니다.");
    }
}




// // function func_confirm('정말로 삭제하시겠습니까?') {

// //     // var userinput = prompt("비밀번호를 입력해주십시오.");
// //     var result = confirm();

// //     if(result) {
// //         alert('삭제되었습니다.');
// //         location.href='05.Main_Board_ARp01.html';
// //     } else {
// //         location.href='06.Main_Board_AR_RP.html';
// //     }
// // }

// // $(function(){
// //     $(".btn_delete").click(function(){
// //         var result = confirm("정말로 삭제하시겠습니까?")

// //         if(result) {
// //             alert("삭제되었습니다.")
// //             location.href='05.Main_Board_ARp01.html';
//         } else {
//             location.href='06.Main_Board_AR_RP.html';

//         }
//     })
// })