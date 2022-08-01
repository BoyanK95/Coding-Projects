function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if (navBarToggle.className === 'topnav') {
        navbarToggle.className += ' responsive';

    } else {
        navbarToggle.className = 'topnav';
    }
}