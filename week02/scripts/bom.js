// References to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener for the Add Chapter button
button.addEventListener('click', function() {
    // Check if the input field is not empty
    if (input.value.trim() !== '') {
        // Create new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set text content of list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Append delete button to list item, and list item to list
        li.append(deleteButton);
        list.append(li);

        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Focus back on input after deletion
        });

        // Clear input field and focus back on it
        input.value = '';
        input.focus();
    } else {
        // If input is empty, focus back on input for user convenience
        input.focus();
    }
});
