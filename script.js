// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the section
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for the header
            behavior: 'smooth'
        });
    });
});

// Animate skills appearing one after another
window.addEventListener('load', () => {
    const skills = document.querySelectorAll('.skills-list li');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 500); // Delay each skill by 500ms
    });
});
