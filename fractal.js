const stars = document.getElementById("stars");

function createStar() {
    const starSize = gsap.utils.random(1, 5);
    const starDuration = gsap.utils.random(5, 20);
    const starDelay = gsap.utils.random(0, 10);

    const starElement = document.createElement("div");
    starElement.classList.add("star");
    starElement.style.width = `${starSize}px`;
    starElement.style.height = `${starSize}px`;
    starElement.style.backgroundColor = "#fff";
    starElement.style.top = `${gsap.utils.random(0, 100)}%`;
    starElement.style.left = `${gsap.utils.random(0, 100)}%`;
    stars.appendChild(starElement);

    gsap.to(starElement, {
        duration: starDuration,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        delay: starDelay,
        ease: "linear",
    });
}

function createStars(count) {
    for (let i = 0; i < count; i++) {
        createStar();
    }
}

createStars(100);