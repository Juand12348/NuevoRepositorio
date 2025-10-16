var misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

function Aleatorios(){
    document.getElementById("nuevos").innerHTML = "";
    console.log("----------------------------------")
    let pokesAleatorios = "";
    for (let i = 0; i < 4; i++) {
        //let num = Math.floor(Math.random() * rango) + 1;
        let num = Math.floor(Math.random() * pokemones.length) + 1;

        pokesAleatorios += `
            <div class="c-lista-pokemon c-un_aleatorio">
                <p>${num}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png" alt="${pokemones[num - 1].name}" width="60" height="60">
                <p>${pokemones[num - 1].name}</p>
            </div>`;


        misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];
        let existe = false;
        for(let j = 0; j < misNumeros.length; j++){
            if(misNumeros[j] === num){
                existe = true;
                break; 
            }
        }

        if (!existe) {
            misNumeros.push(num);
            localStorage.setItem("misNumeros", JSON.stringify(misNumeros));
            document.getElementById("c-unpoke-" + num).innerHTML = `
            <div  onclick="Detalle('${num}')">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png" width="auto" height="45" loading="lazy" alt="${num}">
                <p>${num}</p>
            </div>`
            document.getElementById("c-unpoke-" + num).classList.add("c-mios-pokemon")
        }
    }

    document.getElementById("nuevos").innerHTML += pokesAleatorios
    document.getElementById("contador").innerHTML = `${misNumeros.length} / ${totalPokes}`;
}




function Original() {
    const root = document.getElementById("root");

    // Leer mis personajes capturados desde localStorage
    let misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

    // Contenedor de todo el álbum
    let misPersonajes = `<section class="c-misper">`;

    // Dibujar las 83 cartas
    for (let i = 1; i <= 83; i++) {
        let nombre = personajes[i - 1] ? personajes[i - 1].name : "Desconocido";

        if (misNumeros.includes(i)) {
            // Capturados → resaltados
            misPersonajes += `
            <div class="c-unper c-mios-personajes per-${i}" onclick="Detalle('${i}')">
                <p>#${i}</p>
                <p>${nombre}</p>
            </div>`;
        } else {
            // No capturados → muestran nombre pero estilo distinto
            misPersonajes += `
            <div class="c-unper no-capturado" id="c-unper-${i}">
                <p>#${i}</p>
                <p>${nombre}</p>
            </div>`;
        }
    }

    misPersonajes += `</section>`;

    root.innerHTML = misPersonajes;
}
