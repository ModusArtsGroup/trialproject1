var index = 0;

function changeColors(){
  var colors = ["red","blue","orange","yellow","green","purple"];

  document.body.style.backgroundColor = colors[index];

if (index > colors.length - 1)
  index = 0
}