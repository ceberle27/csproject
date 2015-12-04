//this puts in the variables for the to do list, and what I write.

var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);
//this makes it so when I click on one of my items it crosses it out and when I click again it dissapears.
todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  if (tar.style.textDecoration == "line-through"){
    tar.parentNode.removeChild(tar);
  }
  else{
    tar.style.textDecoration = "line-through"
   }
  }
, false);
