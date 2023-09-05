const video      = document.querySelector(".home__video");
const widthVideo = video.offsetWidth;
const bars   = document.querySelectorAll(".bar");
const swripper   = document.querySelector(".swripper");
const contSlider = document.querySelector(".contSlider");
const cursor     = document.querySelector(".cursor");
const arrayColor = ["#00abf5", "#2ae5b3", "#ff5f68", "#00abf5", "#2ae5b3", "#ff5f68"];
const sliderText = document.querySelectorAll(".containerSlider-text");
const perfilImg  = document.querySelectorAll(".perfil__img-fondo");
const headerMenu = document.querySelector(".header__menu");
const menuSpan   = document.querySelectorAll(".header__menu-span");
const menu       = document.querySelector(".menuH");
const body       = document.body;
const arrayText  = [
    ['Un sinfín de posibilidades', `Sube de nivel con el motor más fiable del mundo. Un control 
    total, unos gráficos magnificos y unas herramientas pensadas
    para cada juego. Es tú proyectos, créalo a tu manera.`],
    ['Una navarrativa reinventada', `Con Unreal Engine, no tienes que esperar
    .Prueba ideas y toma decisiones al momento, desde la primera idea
    idea hasta el último fotograma.`],
    ['Pisa el acelerador a fondo', `Supera a la competencia desde el vehiculo o la sala
    de exposiciones. Contarás con tecnología inteligente para todos los ambitos.`],
    ['Diseña el mañana y experimenta el presente', `Tienes disponible todo el espectro de visualización
     arquitectonica, ya seas principiante o visionario. Cuida la estetica y 
     atrevete con todo con facilidad.`],
    ['Es la hora del espectaculo', `¿Como atraer, retener y conectar con el publico
     actual? Pues con la plataforma de creación 3d en tiempo real más abierta y avanzada del mundo.`],
    ['Ficción hecha realidad', `Prepárate para los momentos más importantes con una plataforma diseñada para que
    dispongas el control absoluto. El tiempo real, realismo y presición ahora van de la mano.`],
]

//codigo para activar la animación de las barras del menú
headerMenu.addEventListener("click", ()=>{
    body.classList.toggle("active");
    menu.classList.toggle("menuH-active");
    menuSpan[0].classList.toggle("menu-span-first-active");
    menuSpan[1].classList.toggle("menu-span-second-active");
    menuSpan[2].classList.toggle("menu-span-third-active");
});

/*codigo para que la configuración del mouse solo se vea dentro del slider*/
contSlider.addEventListener("mousemove", (event)=>{
    cursor.style.setProperty("--x", `${event.clientX}px`)
    cursor.style.setProperty("--y", `${event.clientY}px`)
    cursor.style.opacity = "1";
})

contSlider.addEventListener("mouseout", ()=>{
    cursor.style.opacity = "0";
})

/**/
perfilImg.forEach(img=>{
    img.addEventListener("mousemove",e=>{
        cursor.style.setProperty("--x", `${e.clientX}px`)
        cursor.style.setProperty("--y", `${e.clientY}px`)
        cursor.style.opacity = "1";
    })
    
    img.addEventListener("mouseout", ()=>{
        cursor.style.opacity = "0";
    })
});

function addRemoveAnimation(textH2, textP) {
    sliderText[0].style.animation = "change 1s";
    sliderText[0].textContent = textH2;
    sliderText[1].style.animation = "change 1s";
    sliderText[1].textContent = textP;
    setTimeout(()=>{sliderText[0].style.animation = "";sliderText[1].style.animation = ""}, 1000);
}

bars.forEach((bar, i)=>{
    let position = i;
    bar.addEventListener("click", ()=>{
        swripper.style.transform = `translateX(${position * -(100/6)}%)`
        addRemoveAnimation(arrayText[i][0], arrayText[i][1]);
        bars.forEach(b=>{
            b.classList.remove("active");            
        });
        bar.classList.add("active");
    })
});

document.addEventListener("scroll", ()=>{
    if(this.scrollY > 333) {
        video.style.position = "absolute";
        video.style.opacity = ".5";
        video.style.top = "100%";
        if(window.innerWidth <= 1250){
            video.style.width = `${widthVideo - 600}px`
        }else{
            video.style.width = `${widthVideo - 800}px`
        }
    }
    else if(this.scrollY > 167) {
        video.style.position = "fixed";
        video.style.opacity = "1";
        video.style.top = "auto"
        if(window.innerWidth <= 1250){
            video.style.width = `${widthVideo - 400}px`;
        }else{
            video.style.width = `${widthVideo - 600}px`;
        }
    }
    else if(this.scrollY > 50) {
        if(window.innerWidth <= 1250){
            video.style.width = `${widthVideo - 200}px`;
        }else{
            video.style.width = `${widthVideo - 400}px`;
        }
    }
    else {
        video.style.width = "100%";
    }
});