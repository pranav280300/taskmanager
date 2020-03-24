let doc = document;
let taskAdder = doc.querySelector('#task-adder');
let buttonSubmit = doc.querySelector('#submit-button');
let unorderedList = doc.querySelector('#list-todo');
buttonSubmit.addEventListener('click',addToList);

//Creation ? Updation

function addToList(e){
  e.preventDefault();
  let li = doc.createElement('li');
  li.className = 'list-group-item';
  let text = doc.createTextNode(taskAdder.value);
  let button = doc.createElement('button');
  button.id = 'delete';
  button.className = 'float-right btn btn-danger';
  let buttonText = doc.createTextNode("Delete");
  button.appendChild(buttonText);
  li.appendChild(text);
  li.appendChild(button);
  unorderedList.appendChild(li);
  taskAdder.value = '';
}

//Deletion

unorderedList.addEventListener('click',deleteToList);
function deleteToList(e){
  if(e.target.id == 'delete'){
    let taskToDelete = e.target.parentNode;
    unorderedList.removeChild(taskToDelete);
  }
}

//Search --

let searchText = doc.querySelector('#search');
searchText.addEventListener('keyup',searchToList);

function searchToList(e){
  let todos = doc.querySelectorAll('.list-group-item');
  let text = searchText.value.toLowerCase();
  for(let i=0;i<todos.length;i++){
    if(todos[i].firstChild.textContent.toLowerCase().includes(text)===true){
      console.log(todos[i]);
      todos[i].style.display = 'block';
    }
    else{
      todos[i].style.display = 'none';
    }
  }
}

// Delete All --

let deleteAll = doc.querySelector('#delete-all');
deleteAll.addEventListener('click',deleteAllList);

function deleteAllList(e){
  var r = confirm("Are you sure you want to Delete All?");
  if (r == true) {
    while (unorderedList.firstChild) {
      unorderedList.removeChild(unorderedList.firstChild);
    }
  }
  else {
    console.log("What a shot!");
  }

}
