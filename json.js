let task = document.getElementsByClassName('task');
let container = document.getElementsByClassName('container');
let msgContainer;

    //Enter to add task
       document.addEventListener('keyup',function(key){
    if(key.keyCode == '13' || key.keyCode == 'Enter')
        addTask();
});

function addTask()
    {
// Ignore white space
task[0].value = task[0].value.toLowerCase().trim();

// Task is not Empty
    if(task[0].value)
    {
        let msg = document.getElementById('msg');
        msgContainer  = document.getElementById('msg-container');
        msgContainer.style.display ='none';
        let newTask = document.createElement('p');
        
        let txt = document.createTextNode(task[0].value);
        
        task[0].value = '';
        
        newTask.appendChild(txt);
        
        container[0].appendChild(newTask);
        
        // Adding New Class
        newTask.classList.add('list');

        
        let button = document.createElement('button');
        let done = document.createElement('button');
        
        newTask.appendChild(button);
        newTask.appendChild(done);
        
        button.innerHTML = '&#9711;';
        done.innerHTML = '☐';
        done.classList.add('done');
        button.classList.add('button');
        
        // Done button
        done.addEventListener('click', doneEvent = () => {
            if(newTask.style.textDecorationColor !== 'red')
            {
            newTask.style.textDecoration = ('line-through');
            newTask.style.textDecorationColor = 'red';
            done.textContent = '☑';
                }
            else
            {
            newTask.style.textDecoration = ('none');
            done.textContent = '☐';
                }
        });
        
        // Delete button
        button.addEventListener('click', deleteEvent = () => {
        container[0].removeChild(newTask);
  
        let childElements = container[0].childElementCount;
        if(childElements === 0)
        {
            msgContainer.style.display = "flex";
            msg.innerHTML = "List is empty!";
        }
       });
       
    }
    else
    {
        let containerChild = container[0].children.length;
        if(containerChild === 0)
        {
            msg.innerHTML = 'Nothing to add';
            msgContainer.style.display = "flex";
        }
    }
       }