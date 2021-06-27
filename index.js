

const Input = document.querySelector('.input');
const Button = document.querySelector('.button');
const List = document.querySelector('.list');

Button.addEventListener('click', addTodo);
List.addEventListener('click', deleteCheck);
function addTodo(e){
  e.preventDefault();
  
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  
  if (Input.value === "" || Input.value === null) {
    alert('Enter a value')
  }else{
  const todoItem = document.createElement('li');
     todoItem.innerText = Input.value;
   todoItem.classList.add('item');
   todoDiv.appendChild(todoItem);
   
  const checkButton = document.createElement('button');
  checkButton.innerHTML = "<i class='fas fa-check'></i>";
  checkButton.classList.add('checkBtn');
  todoDiv.appendChild(checkButton);
  
  const trashButton = document.createElement('button');
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add('trashBtn');
  todoDiv.appendChild(trashButton);

  List.appendChild(todoDiv);
  Input.value = "";
}
}

function deleteCheck(e){
 var item = e.target;
 var todo = item.parentElement;
 
 if(item.classList[0] === "trashBtn"){
   todo.remove();
 }
 
 if(item.classList[0] === "checkBtn"){
   todo.classList.toggle('checked');
 }
}