window.onscroll = function() {
    var scrolled = document.documentElement.scrollTop;
    const nav = document.getElementById('nav-container');
    if (scrolled > 100) {
        nav.style.backgroundColor = '#73a582';
        nav.style.zIndex = '999';
        nav.style.opacity = '0.7';
    } else {
        nav.style.backgroundColor = '';
        nav.style.color = 'black';
    }
};