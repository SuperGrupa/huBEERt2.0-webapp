$(document).ready(function () {
  var header = $('header'),
      footer = $('footer'),
      content = $('.offset-header');

  $(content).css("paddingTop", $(header).height());
  $(content).height($(window).height() - $(footer).height() - $(header).height());
});
