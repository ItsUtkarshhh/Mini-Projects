// Login flow :
// 1. User uploads the image & validate it
// 2. User inputs the fullname & validate it
// 3. User inputs the email & validate it
// 4. User inputs the github username & validate it
// 5. User clicks on Generate button & validate it
// 6. After clicking on generate button, user will be navigated to another page, where the UI will show all the details input by user embedded in the ticket generated
// 7. Allows user to download that ticket in form of pdf or JPG

// Collect all the inputs :
const fileInput = document.getElementById('fileInput');
const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
const emailInput = document.querySelector('input[type="email"]');
const githubInput = document.querySelector('input[placeholder="Enter your GitHub username"]');
const generateBtn = document.querySelector('.btn');

// Now as we have collected the data, input by the user, next thing is to generate a ticket and print these details into that ticket!
// And for that ticket we need to generate a new page where that ticket will be shown!

// Now the decision is, how to let travel data between pages : We have two options - URL params & localstorage
// Will see both ways :

// Firstly using localstorage :
// 1. Data will be stored in the local storage once the user clicks generateButton, because this even tells that now the user is sure about the input!
// 2. Now we will store it in the local storage
// 3. Navigate and redirect to a new page

generateBtn.addEventListener('click', function() {
    // Collect the data
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const github = githubInput.value.trim();
    const file = fileInput.files[0];

    if(!file || !name || !email || !github) {
        alert("All fields are required!");
        return;
    }

    if(!email.includes('@')) {
        alert("Enter a valid email");
        return;
    }

    // 3. Convert image → base64
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageBase64 = e.target.result; // or const imageBase64 = reader.result
        const userData = {
            name,
            email,
            github,
            image: imageBase64
        };

        localStorage.setItem("ticketData", JSON.stringify(userData));

        window.location.href = "ticket.html";
    };

    reader.readAsDataURL(file);
});