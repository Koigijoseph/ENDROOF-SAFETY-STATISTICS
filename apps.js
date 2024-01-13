document.addEventListener('DOMContentLoaded', function () {
    const reportForm = document.getElementById('report-form'); // Replace with the actual form ID

    reportForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Assuming you are using FormData to serialize the form data
        const formData = new FormData(reportForm);

        // Send the form data to the server using Fetch API
        fetch('/submit-report', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Report submitted successfully, show a success message
                alert(data.message); // You can replace this with a more sophisticated UI element
            } else {
                // An error occurred, show an error message
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.'); // Handle network or unexpected errors
        });
    });
});
