
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function vboxAnimation(){
    var vbox = document.querySelector(".vbox")
    var playbtn = document.querySelector(".play")
    vbox.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale:1.5,
        opacity:1
    })
})
vbox.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
vbox.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
    })
})
}
vboxAnimation()


function cursorAnimation(){

    
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    


    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(1)'
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}
cursorAnimation()


function loadinganimation(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })
    gsap.from(".page1 .vbox",{
        scale:0.8,
        opacity:0,
        delay:1,
        duration:0.9,
    })
    gsap.from(".page2 .elem img",{
        scale:0.9,
        opacity:0,
        delay:1,
        duration:0.9,
    })
    gsap.from(".nav-part1 svg",{
        y:-15,
        opacity:0,
        delay:0.5,
        duration:0.2,
        stagger:0.2
    })
    gsap.from(".nav-part2",{
        y:-15,
        opacity:0,
        delay:0.5,
        duration:0.2,
        stagger:0.2
    })
}
loadinganimation()
