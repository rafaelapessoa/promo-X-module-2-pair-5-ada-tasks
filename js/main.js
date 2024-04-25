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


  //peticiones al servidor
  const GITHUB_USER = 'elena-alcaraz';
  const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
  
  let tasks = [];

  function getDataAPI(){
    fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      generateList(tasks);
      console.log(tasks);   
   })
  };
  
  getDataAPI();
  
//agregar una nueva tarea
const handleNewTask = (event) => {
  event.preventDefault();
  // 1. Recoge el nombre de la tarea
  // 2. Crea un objeto para la nueva tarea
  const uniqueId = uuidv4();
  const taskName = inputAdd.value;
  const newTask = {
    //mirar cómo dar el ID para que pueda tachar, nos tiene que dar un número entero, sin letras
    id: uniqueId,
    name: taskName, // sustituye este string vacío por el nombre de la tarea nueva
    completed: false,
  };
  // 3. Añade la nueva tarea al array de tareas
  tasks.push(newTask);
  generateList(tasks);
  // 4. Vuelve a pintar las tareas
};

  


//guardar tarea en el local storage
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

//evento para el botón de crear 
add.addEventListener('click', handleNewTask);

  
//pintar la lista
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


//funcion para el checkbox, tachado
function handleClick (event) {

 const idList = parseInt(event.target.id);
 const taskPosition = tasks.findIndex((task) => task.id === idList);
 console.log(taskPosition);
 console.log(idList);
 tasks[taskPosition].completed=!tasks[taskPosition].completed;

 generateList(tasks);
 
};


ulList.addEventListener('click', handleClick); 




generateList(tasks);

//buscar tarea en la lista y filtrarla
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
