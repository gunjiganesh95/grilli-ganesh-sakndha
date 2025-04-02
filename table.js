// Get the modal and close button
const modal = document.getElementById("reservationModal");
const closeBtn = document.querySelector(".close-btn");
const reservationForm = document.getElementById("reservationForm");
const detailsForm = document.getElementById("detailsForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const confirmationDetails = document.getElementById("confirmationDetails");

// Get all reserve buttons
const reserveButtons = document.querySelectorAll(".reserveBtn");
let selectedTable = null;

// Event listener for reserve button
reserveButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectedTable = this.closest("tr"); // Select the table row
        const tableId = selectedTable.dataset.tableId;
        const seats = selectedTable.cells[1].textContent;
        
        // Open the reservation form
        confirmationMessage.style.display = "none";
    });
});

// Handle reservation form submission
detailsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    if (name && date && time && people) {
        // Show reservation confirmation
        confirmationDetails.textContent = `Your reservation for ${people} people on ${date} at ${time} is confirmed.`;
        confirmationMessage.style.display = "block";

        // Mark the table as reserved
        selectedTable.querySelector(".status").textContent = "Reserved";
        selectedTable.querySelector(".status").classList.add("reserved");
        selectedTable.querySelector("button").disabled = true;
    } else {
        alert("Please fill in all fields.");
    }
});
