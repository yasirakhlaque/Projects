document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    let lastScrollTop = 0;

    function revealOnScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        reveals.forEach(reveal => {
            const rect = reveal.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    reveal.classList.add('active', 'left-to-right');
                    reveal.classList.remove('right-to-left');
                } else {
                    // Scrolling up
                    reveal.classList.add('active', 'right-to-left');
                    reveal.classList.remove('left-to-right');
                }
            } else {
                reveal.classList.remove('active', 'left-to-right', 'right-to-left');
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call to reveal elements on page load
});