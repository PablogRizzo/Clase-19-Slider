const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
const n = document.getElementById("next");
const p = document.getElementById("previous");
const cantImag=3;
let i = 0;

n.addEventListener('click',()=>{
    console.log("hola");
    i++;;
    switch(Math.abs(i% cantImag)){
        case 0:
            img1.classList.add("activo");
            img2.classList.remove("activo")
            img3.classList.remove("activo")
            break;
        case 1:
            img1.classList.remove("activo")
            img2.classList.add("activo");
            img3.classList.remove("activo")
            break;
        case 2:
            img1.classList.remove("activo")
            img2.classList.remove("activo")
            img3.classList.add("activo");
            break;
    }
});

p.addEventListener('click',()=>{
    console.log("chau");
    i--;
    switch(Math.abs(i% cantImag)){
        case 0:
            img1.classList.add("activo");
            img2.classList.remove("activo")
            img3.classList.remove("activo")
            break;
        case 1:
            img1.classList.remove("activo")
            img2.classList.add("activo");
            img3.classList.remove("activo")
            break;
        case 2:
            img1.classList.remove("activo")
            img2.classList.remove("activo")
            img3.classList.add("activo");
            break;
    }
});