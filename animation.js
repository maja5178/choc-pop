gsap.registerPlugin(ScrollTrigger);


const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs = section.querySelectorAll("div");
    gsap.from(divs, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 1,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
            //            markers: true,
            scrub: true,
        },
    });
});
