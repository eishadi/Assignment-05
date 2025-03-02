document.getElementById("card5-btn")
.addEventListener("click", function(event){
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
    const timeString = now.toLocaleTimeString();
    // Msg Added
    const msgContainer = document.getElementById("msg-container");
    const p = document.createElement('p');
    p.className = "w-[318px] font-semibold mx-auto rounded-md p-3 mt-6 mb-7 bg-blue-50";
    p.innerText =  `You have Completed The Task Integrate OpenAI API at ${timeString}`;
    msgContainer.appendChild(p);
   // BTN disable
    document.getElementById("card5-btn").style.color = "black"
    document.getElementById("card5-btn").style.background = "gray"
    document.getElementById("card5-btn").disabled = true;
})
