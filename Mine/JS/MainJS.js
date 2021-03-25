function add_fav_elements(a,b,c,d,e){
  var fav_elements = [a,b,c,d,e];
  for (var i = 0; i < fav_elements.length; i++) {
    document.write('<div><li>'+fav_elements[i]+'</li></div>');
    }
}
