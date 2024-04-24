'use stric';

const add = document.querySelector('.js-btn-add');
const search = document.querySelector('.js-btn-filter');
const inputAdd = document.querySelector('.js-text-task-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const ulList = document.querySelector('.js-list');

/*const tasks = [
    { name: 'Recoger setas en el campo', completed: true, id:1 },
    { name: 'Comprar pilas', completed: true, id:2 },
    { name: 'Poner una lavadora de blancos', completed: true, id:3 },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false, id: 4
    },
  ];*/

  let tasks = [];

  function renderTasks(listado) {
    for (const task of tasks) {
      ulList.innerHTML += `<p> ${results.name}</p>`;
    }
    generateList(tasks);
  };
  

  function getDataAPI(){
    fetch(' https://dev.adalab.es/api/todo')
    .then((response) => response.json())
    .then((info) => {
      listTasks = info;
      renderTasks(listTasks);
      console.log(listTasks);   
   })
  };
  

  getDataAPI();
  

  //const checkedTask = (task) => tasks[].completed 

  function generateList (tasks) {
    ulList.innerHTML = '';
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
        <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}/>
        <p> ${task.name}</p>
        </li>
        `; 
      }
      };
    };


function handleClick (event) {
 //funcion para el checkbox
 const idList = parseInt(event.target.id);
 const taskPosition = tasks.findIndex((task) => task.id === idList);
 console.log(taskPosition);
 console.log(idList);
 tasks[taskPosition].completed=!tasks[taskPosition].completed;

 generateList(tasks);
 
};


ulList.addEventListener('click', handleClick); 


//hacer un evento al botón check, sobre la lista de tareas (escucha el evento dentro de la lista)


generateList(tasks);


const handleClickSearch = (event) => {
  event.preventDefault();
  const valueTask = inputFilter.value;
  console.log(valueTask);

  const filterTask = tasks
    .filter((eachTask) =>
      eachTask.name.toLowerCase().includes(valueTask.toLowerCase())
    );

  generateList(filterTask);
};


search.addEventListener('click', handleClickSearch);
