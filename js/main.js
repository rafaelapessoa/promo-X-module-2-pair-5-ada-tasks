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

  //const checkedTask = (task) => tasks[].completed 

  function generateList (tasks) {
    for (const task of tasks){

      if (task.completed === true) {
        ulList.innerHTML += `
        <li class="tachado"> 
        <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}/>
        <p> ${task.name}</p>
        </li>`;
      } else {
        ulList.innerHTML += `
        <li>
        <input type="checkbox" ${task.completed ? 'checked' : ''}/>
        <p> ${task.name}</p>
        </li>
        `; 
      }
      };
    };


function handleClick (event) {
 //funcion para el checkbox
 const idList = parseInt(event.target.id);
 const task = tasks.findIndex((task) => task.id === idList);
 tasks[task].completed=!tasks[task].completed;
 //nos quedamos aquí, esto no funciona
}

ulList.addEventListener('click', handleClick); 


//hacer un evento al botón check, sobre la lista de tareas (escucha el evento dentro de la lista)


generateList(tasks);