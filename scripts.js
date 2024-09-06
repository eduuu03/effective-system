function moveCarousel(sectionId, direction) {
    const container = document.querySelector(`#${sectionId} .produtos-container`);
    const items = container.children.length;
    const itemWidth = container.children[0].offsetWidth;
    const currentTransform = getComputedStyle(container).transform.match(/matrix.*\((.+)\)/);

    let currentIndex = 0;
    if (currentTransform) {
        currentIndex = Math.abs(parseInt(currentTransform[1])) / itemWidth;
    }

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= items / 4) newIndex = Math.ceil(items / 4) - 1;

    container.style.transform = `translateX(-${newIndex * itemWidth * 4}px)`;
}
