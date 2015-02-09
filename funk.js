$(document).ready(function(){
  var cssQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var htmlQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var howToQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var randomQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var newsQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  var current = "";
  var decide = function(elem) {
    var baseDiv = elem.parent();
    var chicken = baseDiv.parent();
    chicken.removeClass('noodle');
    baseDiv.prev().css('border-color', 'transparent');
    console.log(elem.val());
    switch(elem.val()){
      case '100':
      alert(cssQuestions[0]);
      $("." + current + " option[value='100']").remove();
      return too = 2;
      break;
      case '200':
      alert(cssQuestions[1]);
      $("." + current + " option[value='200']").remove();
      return too = 4;
      break;
      case '300':
      alert(cssQuestions[2]);
      $("." + current + " option[value='300']").remove();
      return too = 6;
      break;
      case '400':
      alert(cssQuestions[3]);
      $( "." + current + " option[value='400']").remove();
      return too = 8;
      break;
      case '500':
      alert(cssQuestions[4]);
      $("." + current + " option[value='500']").remove();
      return too = 10;
      case '600':
      alert(cssQuestions[5]);
      $("." + current + " option[value='600']").remove();
      return too = 10;
    };
  };
  $('.cssone').change(function() {
    current = "cssone";
   decide($(this));
 });
  $('.htmlone').change(function() {
    current = "htmlone";
    decide($(this));
  });
  $('.newsone').change(function() {
    current = "newsone";
    decide($(this));
  });
  $('.randomone').change(function() {
    curent = "randomone";
    decide($(this));
  });
  $('.howtoone').change(function() {
    current = "howtoone";
    decide($(this));
  });


  $(".hook").on('mouseleave', function(){
    $(this).addClass('noodle');
  });
});