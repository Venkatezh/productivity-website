document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;

    // Construct issue title and body
    var title = 'Form Submission: ' + name;
    var body = 'Name: ' + name + '\nNumber: ' + number;

    // Create a JavaScript object with form data
    var formData = {
        title: title,
        body: body
    };

    // Convert the JavaScript object to JSON format
    var jsonData = JSON.stringify(formData);

    // Send a POST request to GitHub API with JSON data and access token
    fetch('https://api.github.com/repos/Venkatezh/productivity-website/issues', {
        method: 'POST',
        headers: {
            'Authorization': 'token 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',
            'Content-Type': 'application/json'
        },
        body: jsonData // Pass the JSON data as the request body
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            // Optionally, reset the form
            document.getElementById('data-form').reset();
        } else {
            alert('Failed to submit form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again later.');
    });
});
