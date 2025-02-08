document.querySelectorAll('.tab__btn').forEach(button => {
    button.addEventListener('click', () => {
        // alert("clicked");

        // Remove active class from all buttons and content
        document.querySelectorAll('.tab__btn').forEach(btn => 
            btn.classList.remove('active')
        );
        document.querySelectorAll('.tab__content').forEach(content =>
            content.classList.remove('active')
        );

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});