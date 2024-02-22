let burgerMenu = document.getElementById('burgerMenu');
let nav = document.querySelector('.navBox');

burgerMenu.addEventListener('click', function() {
    
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

function openMail() {
    var emailAddress = "mattef91@hotmail.com"; // Set your pre-set email address here
    window.location.href = "mailto:" + emailAddress;
}