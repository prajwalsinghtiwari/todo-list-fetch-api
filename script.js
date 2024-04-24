document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('todolist');
            data.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = todo.title;
                todoList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
