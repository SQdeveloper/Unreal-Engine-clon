const video = document.querySelector(".home__video");
const widthVideo = video.offsetWidth;
const pointers = document.querySelectorAll(".points");
const swripper = document.querySelector(".swripper");
const contSlider = document.querySelector(".contSlider");
const cursor = document.querySelector(".cursor");

// swripper.forEach((element)=>{
    contSlider.addEventListener("mousemove", (event)=>{
        cursor.style.setProperty("--x", `${event.clientX}px`)
        cursor.style.setProperty("--y", `${event.clientY}px`)
        cursor.style.opacity = "1";
        // console.log("move")
    })
    
    contSlider.addEventListener("mouseout", ()=>{
        cursor.style.opacity = "0";
        // console.log("out")
    })
// });


pointers.forEach((point, i)=>{
    let position = i;
    point.addEventListener("click", ()=>{
        swripper.style.transform = `translateX(${position * -(100/6)}%)`
    })
});

document.addEventListener("scroll", ()=>{
    if(this.scrollY > 333) {
        video.style.position = "absolute";
        video.style.width = `${widthVideo - 800}px`
        video.style.opacity = ".5";
        video.style.top = "100%";
    }
    else if(this.scrollY > 167) {
        video.style.position = "fixed";
        video.style.width = `${widthVideo - 600}px`;
        video.style.opacity = "1";
        video.style.top = "auto"
    }
    else if(this.scrollY > 50) {
        video.style.width = `${widthVideo - 400}px`;
    }
    else {
        video.style.width = "100%";
    }
});