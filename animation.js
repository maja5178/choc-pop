gsap.registerPlugin(ScrollTrigger);


const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs = section.querySelectorAll("div");
    gsap.from(divs, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "75% 80%",
            markers: true,
            scrub: true,
        },
    });
});
