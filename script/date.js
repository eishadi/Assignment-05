const currentDate = new Date();
const formattedDate = currentDate.toDateString();
document.getElementById("date-card").innerText = formattedDate;