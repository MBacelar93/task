
    
    

    const inputTask = document.querySelector('.input-task');
    const btnSendTask = document.querySelector('.btn-send-task');
    const doTask = document.querySelector('.do-task');



    function createLi(){
        const li = document.createElement('li');
        return li;
    }

    inputTask.addEventListener('keypress', function(event){
        if(event.keyCode === 13) {
            if(!inputTask.value) return;
            newTask(inputTask.value);   
        }
    });

    function cleanInput(){
        inputTask.value='';
    };

    function creatBnt(li){
        const bnt = document.createElement('button');
        
        bnt.innerText = 'Apagar Tarefa';
        bnt.setAttribute('class', 'bnt-2');
        li.appendChild(bnt);
        
    }
    function newTask(textoInput){
        const li = createLi();
        li.innerText = textoInput;
        doTask.appendChild(li);
        creatBnt(li);
        cleanInput();
        saveTask();
    };

    btnSendTask.addEventListener('click', function() {
        if(!inputTask.value) return;
        newTask(inputTask.value);
    });

    document.addEventListener('click', function(event){
        const elemento = event.target;
        if(elemento.classList.contains('bnt-2')){
            elemento.parentElement.remove();
            saveTask();

        };
        
    });

    function saveTask(){
        const lineTask = doTask.querySelectorAll('li');
        const taskList = [];

        for(let tarefa of lineTask){
        let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar Tarefa','').trim();
            taskList.push(tarefaTexto)
            

        }
        const jsonTaskJSON = JSON.stringify(taskList);
        localStorage.setItem('doTask',jsonTaskJSON);
        
    
    }

    function savedLoad(){

        const savedLocal = localStorage.getItem('doTask');
        const taskList = JSON.parse(savedLocal);
        console.log(taskList);
        for (let tarefa of taskList){
            newTask(tarefa);
        }
    }


    savedLoad();