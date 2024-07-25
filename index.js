// Function to remove duplicates from an array
function removeDuplicates(array) {
    const uniqueSet = new Set(array);
    return [...uniqueSet];
}

// Function to handle the input and display output
function processArray() {
    // Get the input value
    const input = document.getElementById('array-input').value;

    // Convert the input string to an array of numbers
    const inputArray = input.split(',').map(Number);

    // Remove duplicates
    const uniqueArray = removeDuplicates(inputArray);

    // Display the unique values
    document.getElementById('unique-values').textContent = uniqueArray.join(', ');
}

// Add event listener to the button
document.getElementById('process-button').addEventListener('click', processArray);
