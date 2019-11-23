//event lister for submitting item
window.onload = function(){
  var button = document.getElementById('Submit');

  button.addEventListener("click", getItem);
}

//gets to do item and creates a li button and check box
//sets two  event listers for deleting and checking off to do's
function getItem(){
  var listItem = document.getElementById('ToDo').value;
  var list = document.getElementById('List');

  var item = `<li class="li">${listItem} <input type='checkbox' class='checked'></input><input type='button' class='button' value='Delete'></input></li>`;
  list.insertAdjacentHTML('afterbegin', item);

  const checkbox = document.querySelectorAll('input[type="checkbox"]')
  checkbox.forEach(checkbox => checkbox.addEventListener('change', checked))

  const deleteButton = document.querySelector('.button');
  deleteButton.addEventListener('click', clear);

  var cleared = document.getElementById('ToDo').value = '';
}


//adds line through text
function checked(){
  console.log('asfasf');
  var checked = document.querySelector('.li');
  checked.classList.toggle("cross");



}

//deletes li
function clear(){
    console.log('asfasf');
  this.parentNode.remove();
}
