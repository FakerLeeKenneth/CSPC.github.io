document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = 'Welcome to Our Church!';

    const serviceTimes = [
        { day: 'Sunday', time: '10:00 AM' },
        { day: 'Wednesday', time: '7:00 PM' }
    ];

    const serviceList = document.getElementById('service-times');
    serviceTimes.forEach(service => {
        const listItem = document.createElement('li');
        listItem.textContent = `${service.day}: ${service.time}`;
        serviceList.appendChild(listItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        console.log('Contact Form Submitted:', data);
        alert('Thank you for your message!');
        contactForm.reset();
    });
});