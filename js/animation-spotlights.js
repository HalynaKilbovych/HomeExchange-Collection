document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.spotlights-item');
    const options = {
        threshold: 0.5 // Відсоток видимості елемента для спрацьовування
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('.spotlights-img');
                const subtitle = entry.target.querySelector('.spotlights-subtitle');
                const description = entry.target.querySelector('.spotlights-description');

                const delay = index * 100; // Затримка для кожної картки

                if (img) setTimeout(() => img.classList.add('animate-right'), delay);
                if (subtitle) setTimeout(() => subtitle.classList.add('animate-left'), delay);
                if (description) setTimeout(() => description.classList.add('animate-left'), delay);

                observer.unobserve(entry.target); // Припиняємо спостереження після першої анімації
            }
        });
    }, options);

    items.forEach(item => {
        observer.observe(item);
    });
});