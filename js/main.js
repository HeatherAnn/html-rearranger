var $h1Above = $('<h1>');
var $h1Below = $('<h1>');
var $liAbove = $('<ul>');
var $liBelow = $('<ul>');

$h1Above.html('Above ground veggies');
$h1Below.html('Below ground veggies');

$('body').append($h1Above);
$('body').append($ulAbove);

$('body').append($h1Below);
$('body').append($ulBelow);

$('ul li').each(function () {
  if ($(this).hasClass('above')) {
    $ulAbove.append($(this));
  } else {
    $ulBelow.append($(this));
  }
});
