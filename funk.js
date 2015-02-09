$(document).ready(function(){

var decide = function(elem) {
  var baseDiv = elem.parent();
  var chicken = baseDiv.parent();
  chicken.removeClass('noodle');
  baseDiv.prev().css('border-color', 'transparent');
  console.log(elem.val());
  switch(elem.val()){
    case '100':
    return too = 2;
    break;
    case '200':
    return too = 4;
    break;
    case '300':
    return too = 6;
    break;
    case '400':
    return too = 8;
    break;
    case '500':
    return too = 10;
  };
};
$('select').change(function() {
  decide($(this));
});
$('.stubborn').on('click',listin);
$('.rollin').on('click', function(){
  $('.stubborn').trigger('click');
});
$(".hook").on('mouseleave', function(){
  $(this).addClass('noodle');
});
$('.pepsi').on('click', function(){
  $(this).parent().parent().remove();
});



});