window.onscroll = function() {
    var scrolled = document.documentElement.scrollTop;
    const nav = document.getElementById('nav-container');
    if (scrolled > 100) {
        nav.style.backgroundColor = '#73a582';
        nav.style.zIndex = '999';
        nav.style.opacity = '0.9';
    } else {
        nav.style.backgroundColor = '';
        nav.style.color = 'black';
    }
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenImage = document.querySelectorAll('.hiddenimg');
hiddenElements.forEach(element => {
    observer.observe(element);
});
hiddenImage.forEach(element => {
    observer.observe(element);
});
