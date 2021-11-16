const header = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

window.addEventListener('load', () => {
  const form = document.getElementById('form');
  const nameField = document.querySelector('#name');
  const commentField = document.querySelector('#comment');
  const list_el = document.querySelector('.commentList');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = nameField.value;
    const comment = commentField.value;

    const task_el = document.createElement('li');
    const name_el = document.createElement('span');
    name_el.classList.add('name');
    name_el.innerHTML = task;
    task_el.appendChild(name_el);

    const comment_el = document.createElement('p');
    comment_el.innerHTML = comment;
    task_el.appendChild(comment_el);

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('btn', 'btn-warning');
    task_delete_el.innerText = 'Sil';

    task_el.appendChild(task_delete_el);
    list_el.appendChild(task_el);

    nameField.value = '';
    commentField.value = '';

    task_delete_el.addEventListener('click', (e) => {
      list_el.removeChild(task_el);
    });
  });
});
