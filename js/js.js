$(document).ready(function(){
//   $('#chart_txt ul li').mouseover(function(){
//      $(this).addClass('num1');
//       $('#chart_txt ul li:first').removeClass('num1');
//   }).mouseout(function(){
//       $(this).removeClass('num1');
//       $(this).addClass('num2');
//   });
//    
    $('#chart_txt ul li').mouseover(function(){
        $('#chart_txt ul li').removeClass('selected');
        $(this).addClass('selected');
    });
});