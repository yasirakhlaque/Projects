document.getElementById('checkbox').addEventListener('change', function() {
    const explodeAnimation = document.querySelector('.explode-animation');
    explodeAnimation.style.animation = 'none';
    setTimeout(() => {
        explodeAnimation.style.animation = '';
    }, 10);
});
