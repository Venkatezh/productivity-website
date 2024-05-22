document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;

    var title = 'Form Submission: ' + name;
    var body = 'Name: ' + name + '\nNumber: ' + number;

    var formData = {
        title: title,
        body: body
    };

    var jsonData = JSON.stringify(formData);

    fetch('https://api.github.com/repos/Venkatezh/productivity-website/issues', {
        method: 'POST',
        headers: {
            'Authorization': 'token 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',
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
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
