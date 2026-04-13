console.log("script started");  



function processForm(event) {
    console.log("click");
    event.preventDefault(); // Prevent the page from refreshing

    let fNameInput = document.getElementById("firstname");
    console.log(fNameInput.value);

    let lNameInput = document.getElementById("lastname");
    console.log(lNameInput.value);

    let emailInput = document.getElementById("email");
    console.log(emailInput.value);
    
    let dateInput = document.getElementById("birthdate");
    let birthdate = dateInput.value;

    console.log(birthdate);
}