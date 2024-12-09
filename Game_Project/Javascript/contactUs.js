var submitForm = document.getElementById("Submit")

function doThis(){
    alert("Thank you for your feedback! We will get back to you soon!")
}
submitForm.addEventListener("click", doThis)

const form = document.getElementById("contact-information");

async function saveData(event){
  event.preventDefault();
  const formEmail = document.getElementById("emailInfo");
  const formMessage = document.getElementById("messageInfo");
  const contactinfo = {
    email: formEmail.value,
    message: formMessage.value
  };
  await fetch('/api/contact/save', {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify(product)
   });
}
form.addEventListener("Submit", saveData)