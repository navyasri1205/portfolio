document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    showSection('home');

    window.showSection = showSection;

    window.showMoreInfo = function(id) {
        const info = document.getElementById(id);
        if (info.style.display === 'block') {
            info.style.display = 'none';
        } else {
            info.style.display = 'block';
        }
    }
});
