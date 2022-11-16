const video = document.querySelector(".home__video");
const widthVideo = video.offsetWidth;
const pointers = document.querySelectorAll(".points");
const swripper = document.querySelector(".swripper");
const contSlider = document.querySelector(".contSlider");
const cursor = document.querySelector(".cursor");
const arrayColor = ["#00abf5", "#2ae5b3", "#ff5f68", "#00abf5", "#2ae5b3", "#ff5f68"];
const sliderText = document.querySelectorAll(".containerSlider-text");
const arrayText = [
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


/*codigo para que la configuración del mause solo se vea dentro del slider*/
contSlider.addEventListener("mousemove", (event)=>{
    cursor.style.setProperty("--x", `${event.clientX}px`)
    cursor.style.setProperty("--y", `${event.clientY}px`)
    cursor.style.opacity = "1";
})

contSlider.addEventListener("mouseout", ()=>{
    cursor.style.opacity = "0";
})

/*puntos del slider*/
function changeColor(color) {
    cursor.style.borderColor = color;
    pointers[0].style.backgroundColor  = color;
    pointers[1].style.backgroundColor  = color;
    pointers[2].style.backgroundColor  = color;
    pointers[3].style.backgroundColor  = color;
    pointers[4].style.backgroundColor  = color;
    pointers[5].style.backgroundColor  = color;
}

function addRemoveAnimation(textH2, textP) {
    sliderText[0].style.animation = "change 1s";
    sliderText[0].textContent = textH2;
    sliderText[1].style.animation = "change 1s";
    sliderText[1].textContent = textP;
    setTimeout(()=>{sliderText[0].style.animation = "";sliderText[1].style.animation = ""}, 1000);
}

// pointers[1].addEventListener('click', ()=>{
//     sliderText[0].style.animation = "change 1s";
//     sliderText[0].textContent = "Jefferson Sivla Quinto";
//     setTimeout(()=>{sliderText[0].style.animation = ""}, 1000)
// })
pointers.forEach((point, i)=>{
    let position = i;
    point.addEventListener("click", ()=>{
        swripper.style.transform = `translateX(${position * -(100/6)}%)`
        switch(i){
            case 0: changeColor("#00abf5"); addRemoveAnimation(arrayText[i][0], arrayText[i][1]); break;
            case 1: changeColor("#2ae5b3"); addRemoveAnimation(arrayText[i][0], arrayText[i][1]); break;
            case 2: changeColor("#ff5f68"); addRemoveAnimation(arrayText[i][0], arrayText[i][1]); break;
            case 3: changeColor("#8a2be2"); addRemoveAnimation(arrayText[i][0], arrayText[i][1]); break;
            case 4: changeColor("#d6e22b"); addRemoveAnimation(arrayText[i][0], arrayText[i][1]); break;
            case 5: changeColor("#e22bab"); addRemoveAnimation(arrayText[i][0], arrayText[i][1]); break;
        }
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