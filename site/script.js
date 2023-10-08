// Array of different language greetings
const greetings = [
    "Hello", // Default
    "Hola",
    "Bonjour",
    "Ciao",
    "Konnichiwa",
    "Hallo",
    "Olá",
    "Salut",
    "Hej",
    "Здравствуйте",
    "你好",
];

// Get the <h1> element
const helloElement = document.getElementById("welina");

// Function to change the greeting randomly
function changeGreeting() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * greetings.length);
    
    // Update the text with a random greeting
    helloElement.textContent = greetings[randomIndex];
}

// Call the function to change the greeting on page load
changeGreeting();
