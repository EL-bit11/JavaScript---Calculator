
// Prompt user to enter their name and store it in the variable `name`
const name = prompt("Hello, I calculate your days on earth. Before we begin, who am I addressing?");

// Prompt user to enter their birthday and store it in the variable `birthdayInput`
const birthdayInput = prompt(`Thank you ${name}, enter your birthday (YYYY-MM-DD): `);

// Function to calculate days alive
function dayCalculator(birthdayInput) {
    const birthday = new Date(birthdayInput);
    const today = new Date();
    const timeDifference = today - birthday;

    // Convert time difference to days
    const daysAlive = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysAlive;
}

// Calculate days alive and store in `daysAlive`
const daysAlive = dayCalculator(birthdayInput);

// Display the result
alert(`You have been on Earth for ${daysAlive} days.`);
