const stars = document.querySelectorAll(".stars");
const galaxy = document.querySelector(".galaxy");

gsap.to(stars, {
    duration: 30,
    x: "random(-200, 200)",
    y: "random(-200, 200)",
    scale: "random(0.5, 1.5)",
    opacity: "random(0.2, 0.8)",
    ease: "none",
    stagger: 0.1,
    repeat: -1,
});

gsap.fromTo(
    "#space", { backgroundColor: "#000" }, {
        duration: 60,
        backgroundColor: "#000",
        ease: "none",
        repeat: -1,
        yoyo: true,
    }
);

gsap.to(galaxy, {
    duration: 20,
    scale: 1,
    ease: "power4.out",
    repeat: -1,
    yoyo: true,
});