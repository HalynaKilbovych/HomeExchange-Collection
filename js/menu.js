document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.navbar-toggle');
    var collapseMenu = document.querySelector('#navbar-collapse');

    toggleButton.addEventListener('click', function() {
        collapseMenu.classList.toggle('open');
    });
});