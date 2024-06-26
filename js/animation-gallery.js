document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("animate");
                }, index * 200); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll(".clickable-gallery-item");
    items.forEach(item => {
        observer.observe(item);
    });
});