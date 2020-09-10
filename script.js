{
    const tasks = [
    ];


    const addNewTask  = (newTask) => {
        tasks.push({
            content: newTask,
        });

        render();

        const form = document.querySelector(".js-form");
        form.reset();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const eventsOnButtons = () => {
        const removeButtons = document.querySelectorAll(".js-clear");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
            <div style="border-bottom: 1px solid #877f5a" class="buttons__container">
            <button class="js-done">✓</button>
            <button class="js-clear"> <img src="https://icons-for-free.com/iconfiles/png/512/trash+bin+icon-1320086460670911435.png" width="20px"></button>
            
                <span ${task.done ? "style=\"text-decoration: line-through\"" : ""}>${task.content}</span>
                </div>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        eventsOnButtons();
    };



    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask").value.trim();
        
        if(newTask === "") {
            return;
        }

        addNewTask(newTask);
    };

    

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}