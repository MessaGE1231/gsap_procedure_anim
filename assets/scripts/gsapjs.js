gsap.registerPlugin(ScrollTrigger)
const links = gsap.utils.toArray('.nav_el')
const hover_anim_elememts = gsap.utils.toArray('.element_hover')

hover_anim_elememts.forEach(el => {
    const tl = gsap.timeline();
    tl.to(el, {
        scale: 1.2,
        yoyo: true,
        duration: .1
    })
    el.addEventListener('mouseenter', () => {
        tl.play()
    })

    el.addEventListener('mouseleave', () => {
        tl.reverse()
    })
})


gsap.fromTo(links, {
opacity: 0,
y: -20
    }, 
    {
opacity: 1,
duration: .2,
y: 0,
yoyo:true,
stagger: .1
})

gsap.from(".scroll_anim", {
    opacity: 0,
    y: -100,
    stagger: .1,
    scrollTrigger: {
    trigger: ".scroll_anim",
    start: "top 50%",
    end: "bottom 20%",
    scrtub: 1,
    markers: true,
    toggleActions: "play none none reverse",
    }
});

    


