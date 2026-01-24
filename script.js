/* Reveal animations */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

/* Slideshows */
document.querySelectorAll('[data-slideshow]').forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let index = 0;

    images[index].classList.add('active');

    slideshow.querySelector('.next').onclick = () => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    };

    slideshow.querySelector('.prev').onclick = () => {
        images[index].classList.remove('active');
        index = (index - 1 + images.length) % images.length;
        images[index].classList.add('active');
    };
});
