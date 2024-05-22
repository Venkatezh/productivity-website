document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('data-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbwlgy19LHGRJZdQjY5r6rncoejbTF1v77ETxi-DYfba-nA2jjZUb7vau8PpGl8e-ZR97Q/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => {
            if (response.ok) {
                alert('Data submitted successfully!');
                form.reset();
            } else {
                throw new Error('Failed to submit data.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit data. Please try again later.');
        });
    });
});
