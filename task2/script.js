function addTask() {
    var taskInput = document.getElementById('task-input');
    var imageInput = document.getElementById('image-input');
    var taskText = taskInput.value;
    var image = imageInput.files[0];
    
    if (taskText.trim() === '') {
      alert('Please enter a task');
      return;
    }
    
    var reader = new FileReader();
    reader.onload = function(event) {
      var imageUrl = event.target.result;
      var listItem = document.createElement('li');
      listItem.className = 'todo-item';
      listItem.innerHTML = `
        <img src="${imageUrl}" alt="Task Image">
        <span>${taskText}</span>
        <span class="delete-btn" onclick="deleteTask(this)">✖️</span>
      `;
      document.getElementById('tasks').appendChild(listItem);
    };
    reader.readAsDataURL(image);
    
    taskInput.value = '';
    imageInput.value = '';
  }
  
  function deleteTask(btn) {
    var listItem = btn.parentElement;
    listItem.remove();
  }