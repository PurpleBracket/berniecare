
var windowWidth = window.innerWidth;
if (windowWidth <= 627) { // iP 6s-l
  $('.step').stepify({
      distribution:[1,1,1,1]
  });
}


if (!$("#step-3").hasClass("hidden")) {
  $("#share").addClass('active');
  console.log('moew');
}
