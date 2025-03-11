
document.getElementById("card-container").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        alert("Board Updated Successfully")
            // Task Assigned
            const taskAssigned = document.getElementById("task-assigned").innerText;
            const convertedTaskAssigned = parseInt(taskAssigned);
            const sum = convertedTaskAssigned - 1;
            document.getElementById("task-assigned").innerText = sum;
            // Task Completed
            const taskCompleted = document.getElementById("task-completed").innerText;
            const convertedTaskCompleted = parseInt(taskCompleted);
            const add = convertedTaskCompleted + 1;
            document.getElementById("task-completed").innerText = add;
             // Add Current Time
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            // Msg Added
            let title = event.target.parentNode.parentNode.querySelector("h3").innerText
            const msgContainer = document.getElementById("msg-container");
            const p = document.createElement('p');
            p.className = "w-[318px] font-semibold mx-auto rounded-md p-3 mt-6 mb-7 bg-blue-50";
            
            p.innerHTML =  `You have Completed <span class="font-bold text-green-500" >${title}</span> at ${timeString}`;
            msgContainer.appendChild(p);
            // Disable Btn
            event.target.disabled = true;
            // Last Alert Message
            if (convertedTaskAssigned <= 1){
                alert("Congrates!!! You have completed all the current Task.")
            }
    }
})