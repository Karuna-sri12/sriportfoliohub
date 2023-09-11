//toggle icon navbar

//scrolling section



window.onscroll =() => {
    //sticky header
    let header =document.querySelector("header");

    header.classList.toggle('sticky',window.scrollY > 100);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobileno = document.getElementById("number").value;
    var subject = document.getElementById("sub").value;
    var message = document.getElementById("msg").value;
  
    // You can customize the success message here
    var successMessage = `Thank you, ${name}! It's great to connect with you!!`;
  
    // Display the success message
    var messageStatus = document.getElementById("message-status");
    messageStatus.textContent = successMessage;
  
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("sub").value = "";
    document.getElementById("msg").value = "";
  });

  // Get a reference to the button element
const sum = document.getElementById("sum");

// Event handling function
function handleButtonHover() {
  sum.style.backgroundColor ="white" ; // Change to desired color
 sum.style.color =" blue"; // Change to desired text color
}

function handleButtonHoverOut() {
 sum.style.backgroundColor = ""; // Reset background color
  sum.style.color = ""; // Reset text color
}

// Add event listeners
sum.addEventListener("mouseover", handleButtonHover);
sum.addEventListener("mouseout", handleButtonHoverOut);