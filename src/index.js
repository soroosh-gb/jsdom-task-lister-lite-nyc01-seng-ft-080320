document.addEventListener("DOMContentLoaded", () => {
  // your code here


  const form = document.querySelector('#create-task-form');
  //console.log(form);
  const userInput = document.getElementById('new-task-description');
  //console.log(userInput.value);
  const ul = document.getElementById('tasks');
  //console.log(ul);
  const color_select = document.querySelector('#color_select');
  delete_task = () => {}

  form.addEventListener('submit', e => {
    let li_task = document.createElement('li');

    li_task.textContent = userInput.value;
    li_task.id = userInput.value;
    
    let editBtn = document.createElement('button');
    
    editBtn.id = `edit-${li_task.id}`;
    editBtn.innerText = 'EDIT';

    editBtn.addEventListener('click', e => {
      let edit_area = document.createElement('input');
      edit_area.type = 'text';
      li_task.append(edit_area);

      editBtn.style.display = 'none';

      let submitBtn = document.createElement('button');
      submitBtn.id = `submit-${li_task.id}`;
      submitBtn.innerText = 'submit';

      li_task.append(submitBtn);

      submitBtn.addEventListener('click', e => {
        li_task.innerText = edit_area.value;
        li_task.id = edit_area.value
        console.log('EDIT SUBMIT')
        //editBtn.style.display = 'block';
        let editBtn = document.createElement('button');
    
        editBtn.id = `edit-${li_task.id}`;
      editBtn.innerText = 'EDIT';
        
      })
    });


    let deleteBtn = document.createElement('button');

    deleteBtn.innerText = 'delete';
    deleteBtn.addEventListener('click', e => {
      document.getElementById(`${li_task.id}`).remove();
    })

    ul.appendChild(li_task).append(deleteBtn);
    
    ul.appendChild(li_task).append(editBtn);
    e.preventDefault();
  })
  

  color_select.addEventListener('change', e => {
    ul.style.color = color_select.value;
    console.log(color_select.value);
  })
});
