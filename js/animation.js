document.addEventListener("DOMContentLoaded", function() {
    var bannerHeadingBox = document.querySelector('.banner-heading-box');
    var bannerParagraphBox = document.querySelector('.banner-pragraph-box');
    var bannerButton = document.querySelector('.banner-button');
    var bannerSubHeading = document.querySelector('.banner-sub-heading');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(bannerHeadingBox)) {
            bannerHeadingBox.classList.add('visible');
        }
        if (isElementInViewport(bannerParagraphBox)) {
            bannerParagraphBox.classList.add('visible-paragraph');
        }
        if (isElementInViewport(bannerButton)) {
            bannerButton.classList.add('visible-button');
        }
        if (isElementInViewport(bannerSubHeading)) {
            bannerSubHeading.classList.add('visible-sub-heading');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); 
});