function add_fav_elements(a,b,c,d,e){
  var fav_elements = [a,b,c,d,e];
  for (var i = 0; i < fav_elements.length; i++) {
    document.write('<div><li>'+fav_elements[i]+'</li></div>');
    }
}


$(document).ready(function(){
  // NOTE:  favorites index 추가
  var movies_index = ['once upon a time in america','cinema pradiso','parasite','a beautiful mind','Forrest Gump'];
  var books_index = ['le petit prince','the great gatsby','1984','my lime orange tree','harry potter'];
  var languges_1 = ['JAVA','C','PYTHON'];
  var languges_2 = ['MySQL','JS','HTML'];


  for (var i = 0; i < movies_index.length; i++) {
    $("#movies_elements").append('<div><li>'+movies_index[i]+'</li></div>');
    $("#books_elements").append('<div><li>'+books_index[i]+'</li></div>');
  }
    // NOTE:  skills_container에 boxs 추가
  for (var i = 1; i < 3; i++){
    $("#skills_container").append('<div class="skills_boxs" id="skills_boxs'+i+'"></div>');
  }

  for (var i = 1; i < 3; i++){
    $("#skills_boxs1").append('<div class="skills_box" id="box_1_inner'+i+'"></div>');
    $("#skills_boxs2").append('<div class="skills_box" id="box_2_inner'+i+'"></div>');
  }
  //skills_boxs 에 imgs 추가
  for (var i = 0; i <= 2; i++) {
   $("#box_1_inner1").append('<img src="./Image/resume/skills/'+languges_1[i]+'.png">');
   $("#box_2_inner1").append('<img src="./Image/resume/skills/'+languges_2[i]+'.png">');
   $("#box_1_inner2").append('<p class="skills_box_inner_text"><a href="https://github.com/choi-dongmin/'+languges_1[i]+'">'+languges_1[i]+'</a></p>');
   $("#box_2_inner2").append('<p class="skills_box_inner_text"><a href="https://github.com/choi-dongmin/'+languges_2[i]+'">'+languges_2[i]+'</a></p>');
  }
});

$('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});
