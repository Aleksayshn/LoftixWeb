document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.request__form'); 
    
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = 'Your form has been submitted successfully!';
    notification.style.display = 'none';
    document.body.appendChild(notification);

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const isPopup = form.classList.contains('form-request--popup');

            if (isPopup) {
                form.style.display = 'none'; 
            }
			form.reset();

            notification.style.display = 'block';

            setTimeout(function() {
                notification.style.display = 'none';
            }, 3000); 
        });
    });
});
