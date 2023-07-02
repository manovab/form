const form = document.getElementById("userForm");
const successPopup = document.getElementById("successPopup");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const organization = document.getElementById("organization").value;

    const formData = {
        firstName,
        lastName,
        email,
        mobile,
        address,
        dob,
        organization
    };

    displaySubmittedData(formData);
    resetForm();
    showSuccessPopup();
});

function displaySubmittedData(formData) {
    const tableBody = document.querySelector("#submittedData tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${formData.firstName}</td>
        <td>${formData.lastName}</td>
        <td>${formData.email}</td>
        <td>${formData.mobile}</td>
        <td>${formData.address}</td>
        <td>${formData.dob}</td>
        <td>${formData.organization}</td>
    `;
    tableBody.appendChild(newRow);
}

function resetForm() {
    form.reset();
}

function showSuccessPopup() {
    successPopup.style.display = "block";
    setTimeout(function() {
        successPopup.style.display = "none";
    }, 3000);
}
