'use stric';

const add = document.querySelector('.js-btn-add');
const search = document.querySelector('.js-btn-filter');
const inputAdd = document.querySelector('.js-text-task-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const ulList = document.querySelector('.js-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];


  function generateList (tasks) {
    for (const task of tasks){
   
    ulList.innerHTML += `
    <li>
    <p> ${task.name}</p>
    </li>
 `;
    }
}

  generateList(tasks);