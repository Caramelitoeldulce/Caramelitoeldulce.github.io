const carruseljs = document.querySelector(".galery")

let left = carruseljs.scrollLeft - carruseljs.clientWidth
let interval = null
let step = 1

const start = () =>{
    interval = setInterval(function() {
        carruseljs.scrollLeft = carruseljs.scrollLeft + step
        if(carruseljs.scrollLeft === left){
            step = step -1
        }

        else if(carruseljs.scrollLeft === 0){
            step = step -1
        }
    },5)
}

const stop = () =>{
    clearInterval(interval)
}

carruseljs.addEventListener("mouseover", () => {
    stop()
})

carruseljs.addEventListener("mouseout", () =>{
    start()
})

start();