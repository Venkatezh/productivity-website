fetch('https://api.github.com/repos/Venkatezh/productivity-website/issues', {
    method: 'POST',
    headers: {
        'Authorization': 'token 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',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: title,
        body: body
    })
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
