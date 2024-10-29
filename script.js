function addStudent() {
    // Get values from the form inputs
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    if (!name || !age || !gender || !course || !email) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new row in the table
    const table = document.getElementById("studentTable");
    const row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteStudent(this)">Delete</button></td>
    `;

    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("course").value = "JavaScript";
    document.getElementById("email").value = "";
}

function deleteStudent(button) {
    // Remove the row from the table
    button.parentElement.parentElement.remove();
}
