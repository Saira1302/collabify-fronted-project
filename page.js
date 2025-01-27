
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll behavior
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            document.querySelector('.navbar').style.top = '-80px';
        } else {
            document.querySelector('.navbar').style.top = '0';
        }
        lastScrollTop = scrollTop;
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // About section animation
    const aboutText = document.querySelector('.about-text');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutText.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(aboutText);

    // Testimonial carousel
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000
    });

    
});