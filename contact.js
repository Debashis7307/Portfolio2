document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      const formData = new FormData(form);

      const fullName = formData.get('fullName');
      const email = formData.get('email');
      const mobileNumber = formData.get('mobileNumber');
      const subject = formData.get('subject');
      const message = formData.get('message');

      // Send email using EmailJS
      emailjs.send('service_qetshai', 'template_yp313hh', {
          fullName: fullName,
          email: email,
          mobileNumber: mobileNumber,
          subject: subject,
          message: message
      })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Toastify({
            text: "Successfully sent!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
        }).showToast();
        form.reset(); // Clear the form
    }, (error) => {
        console.error('FAILED...', error);
        Toastify({
            text: "Failed to send message.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    });
});
});