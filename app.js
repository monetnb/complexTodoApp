// Select Variables
const todoInput = document.querySelector('#todo-input');
const mainContainer = document.querySelector('#main-todos');
const addTodoBtn = document.querySelector('#todo-submit');
const todoContent = document.querySelector('p');
const addCategoryBtn = document.querySelector('#addCategoryBtn');
const categoryInput = document.querySelector('#category-input');
const catContainer = document.querySelector('.catContainer');
const todoTask = document.querySelectorAll('.todo-content');

console.log(todoTask);

// Add Categories
addCategoryBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const catTitle = categoryInput.value;
  const catDiv = document.createElement('div');
  const catHeader = document.createElement('button');

  const isCategoryEmpty = !catTitle || !catTitle.trim().length;
  if (isCategoryEmpty) {
    return alert('Please Enter A Category');
  }
  catHeader.innerText = catTitle;
  catDiv.classList.add('catOption');
  catHeader.classList.add('btnOpt', catTitle);

  catDiv.appendChild(catHeader);
  catContainer.append(catDiv);
  categoryInput.value = '';

  // push category class to select Cat
  const selectCat = document.querySelector('#selectCategory');
  const catOption = document.createElement('option');
  catOption.innerText = catTitle;
  selectCat.appendChild(catOption);

  // Filter Categories
  const filterBtn = document.querySelectorAll('.btnOpt');
  filterBtn.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
      if (btn.className === todoTask.className) {
      }
    });
  });

  // if input = nothing, prevent post on submit
  // if categroy = 'chose cat ', disable add-todo btn.
});

//----------------------------- Add Todo
addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  //  Create Todo
  const todo = todoInput.value;
  if (!todo) alert('Please Enter/Type a Todo');
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-content');
  const todoContent = document.createElement('p');
  todoContent.innerText = todo;

  // Delete Todo
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => {
    todoDiv.remove();
  });

  //   Edit Todo
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('edit');
  editBtn.addEventListener('click', () => {
    updateBtn.style.opacity = 1;
    todoContent.contentEditable = true;
    todoContent.style.backgroundColor = 'white';
    todoContent.focus();
  });

  // Update Todo
  const updateBtn = document.createElement('button');
  updateBtn.innerText = 'Update';
  updateBtn.classList.add('update');
  updateBtn.addEventListener('click', () => {
    todoContent.contentEditable = false;
    todoContent.style.backgroundColor = 'rgb(58, 231, 231)';
    updateBtn.style.opacity = 0;
  });

  // add category id todo Content div
  const catOption = document.getElementById('selectCategory');
  todoDiv.classList.add(catOption.selectedOptions[0].text);

  //   Append All
  todoDiv.appendChild(todoContent);
  todoDiv.appendChild(editBtn);
  todoDiv.appendChild(updateBtn);
  todoDiv.appendChild(deleteBtn);
  mainContainer.append(todoDiv);
  todoInput.value = '';
});
