$(document).ready(function(){
  var cssQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var htmlQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var howToQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var randomQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var newsQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];

  var decide = function(elem) {
    var baseDiv = elem.parent();
    var chicken = baseDiv.parent();
    chicken.removeClass('noodle');
    baseDiv.prev().css('border-color', 'transparent');
    console.log(elem.val());
    switch(elem.val()){
      case '100':
      alert(cssQuestions[0]);
      return too = 2;
      break;
      case '200':
      alert(cssQuestions[1]);
      return too = 4;
      break;
      case '300':
      alert(cssQuestions[2]);
      return too = 6;
      break;
      case '400':
      alert(cssQuestions[3]);
      return too = 8;
      break;
      case '500':
      alert(cssQuestions[4]);
      return too = 10;
      case '600':
      alert(cssQuestions[5]);
      return too = 10;
    };
  };
  $('.cssone').change(function() {
    var numnum = $(".whisper")? 1 : 0;
    if (numnum = 1) {
     $(this).find('.whisper').remove();
   };
   decide($(this));
 });
  $('.htmlone').change(function() {
    decide($(this));
  });
  $('.newsone').change(function() {
    decide($(this));
  });
  $('.randomone').change(function() {
    decide($(this));
  });
  $('.howtoone').change(function() {
    decide($(this));
  });


  $(".hook").on('mouseleave', function(){
    $(this).addClass('noodle');
  });
});