 document.addEventListener('DOMContentLoaded', () => {
            const vaultDoor = document.querySelector('.vault-door');
            const flash = document.querySelector('.flash');
            const sections = document.querySelectorAll('.section');
            const skills = document.querySelectorAll('.skill');
            const navLinks = document.querySelectorAll('.nav a');

            setTimeout(() => {
                vaultDoor.classList.add('open');
                flash.classList.add('active');
            }, 1000);

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        if (entry.target.id === 'home') {
                            animateSkills();
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            function animateSkills() {
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('active');
                    }, index * 200);
                });
            }

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    flash.classList.add('active');
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                        flash.classList.remove('active');
                    }, 200);
                });
            });
        });