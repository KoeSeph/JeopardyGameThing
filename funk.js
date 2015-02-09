$(document).ready(function(){
  // These are the possible questions. 
  // I built this for 30 questions, 6 on each subject.
  var cssQuestions = ['css thingerone','tcss thingertwo','','css thingerfour','css thingerfive','css thingersix'];
  var htmlQuestions = ['html thingerone','htmlthingertwo','html thingerthree','html thingerfour','thtml thingerfive','thtmlthingersix'];
  var howToQuestions = ['howto thingerone','test howto thingertwo','tehowto st thingerthree','testhowto  thingerfour','test howto thingerfive','test howto thingersix'];
  var randomQuestions = ['random thingerone','random thingertwo','random thingerthree','trandom thingerfour','trandomhingerfive','tesrandomingersix'];
  var newsQuestions = ['test thingerone','test thingertwo','test thingerthree','test thingerfour','test thingerfive','test thingersix'];
  // End questions

  // The current variable is used to keep track of the current subject.
  var current = "";

  // The decide function takes in two arguments, the element that is
  // being triggeres, and the subject that is being modified by the function.
  var decide = function(elem, figured) {
    var baseDiv = elem.parent();
    var chicken = baseDiv.parent();
    chicken.removeClass('noodle');
    baseDiv.prev().css('border-color', 'transparent');
    console.log(elem.val());
    switch(elem.val()){
      case '100':
      alert(figured[0]);
      $("." + current + " option[value='100']").remove();
      return too = 2;
      break;
      case '200':
      alert(figured[1]);
      $("." + current + " option[value='200']").remove();
      return too = 4;
      break;
      case '300':
      alert(figured[2]);
      $("." + current + " option[value='300']").remove();
      return too = 6;
      break;
      case '400':
      alert(figured[3]);
      $( "." + current + " option[value='400']").remove();
      return too = 8;
      break;
      case '500':
      alert(figured[4]);
      $("." + current + " option[value='500']").remove();
      return too = 10;
      case '600':
      alert(figured[5]);
      $("." + current + " option[value='600']").remove();
      return too = 10;
    };
  };
  $('.cssone').change(function() {
    current = "cssone";
    decide($(this), cssQuestions);
  });
  $('.htmlone').change(function() {
    current = "htmlone";
    decide($(this), htmlQuestions);
  });
  $('.newsone').change(function() {
    current = "newsone";
    decide($(this), newsQuestions);
  });
  $('.randomone').change(function() {
    curent = "randomone";
    decide($(this), randomQuestions);
  });
  $('.howtoone').change(function() {
    current = "howtoone";
    decide($(this), howToQuestions);
  });
  $(".hook").on('mouseleave', function(){
    $(this).addClass('noodle');
  });
});