var incompleteTodos=document.getElementById("Todoincomplete");
var completedTodos=document.getElementById("Todocompleted");
function createTodo(data){
	var todotext=data.previousSibling;

	  var listItem=document.createElement("li");


	  var label=document.createElement("label");
	  label.setAttribute('onclick','TodoCompleted(this)');
	  var editInput=document.createElement("input");
	  label.innerText=todotext.value;
	  editInput.type="text";
	  todotext.value="";


	  listItem.appendChild(label);
	  listItem.appendChild(editInput);
	  listItem.innerHTML+='<button class="delete" onclick="deleteTodo(this)">&#10006;</button><button id="edit" onclick="editTodo(this)">Edit</button>';

	  incompleteTodos.appendChild(listItem);
	  
}

function editTodo(data){
var listItem=data.parentNode;

var editInput=listItem.children[1];
var label=listItem.children[0];
var containsClass=listItem.classList.contains("editMode");
//If class of the parent is .editmode
if(containsClass){
	data.innerText='Edit';
	label.innerText=editInput.value;
}else{
	data.innerText='Save';
	editInput.value=label.innerText;
}
listItem.classList.toggle("editMode");
}


function deleteTodo(data){
var listItem=data.parentNode;
var ul=listItem.parentNode;
//Remove the parent list item from the ul.
ul.removeChild(listItem);
}

function TodoCompleted(data){

//Append the task list item to the #completed-tasks
var listItem=data.parentNode;
completedTodos.appendChild(listItem);
data.setAttribute('onclick','TodoIncomplete(this)');
data.style.textDecoration="line-through";
}

function TodoIncomplete(data){

//Append the task list item to the #completed-tasks
var listItem=data.parentNode;
incompleteTodos.appendChild(listItem);
data.setAttribute('onclick','TodoCompleted(this)')
data.style.textDecoration="none";
}