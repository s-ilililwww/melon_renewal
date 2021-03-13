function slide(){
    $('.banner:first').fadeOut(3000, function(){
        $(this).appendTo('#banner01');
    });
    $('.banner:eq(0)').fadeIn(3000);
}
setInterval('slide()',3000);

$(document).ready(function(){
   $('#chk_all').change(function(){
        // prop('속성명') => 속성명의 값을 출력
        // prop('속성명', '속성값') => 속성명에 속성값으로 변경
        var check1 = $(this).prop('checked'); // 전체선택의 checked 속성값을 변수 할당
        $('input[name*=chk]').prop('checked',check1); // 4개 수강과목의 checked 속성을 전체선택의 값으로 변경
    }); 
});