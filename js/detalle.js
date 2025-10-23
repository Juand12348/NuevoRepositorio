var esFavorito = false;

// Función para agregar o quitar un Pokémon de favoritos
function toggleFavorito(paramid, paramname) {

    // Leer favoritos actuales desde localStorage
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let existe = false

    // Verificar si ya está guardado
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === paramname) {
            existe = true;
            break;
        }
    }

    if (existe == true) {
        favoritos = favoritos.filter(poke => poke.name !== paramname);
        esFavorito = false;
    } else {
        // Si no está, agregarlo
        favoritos.push({
            name: paramname,
            url: `https://pokeapi.co/api/v2/pokemon/${paramid}/`
        });
        esFavorito = true;
    }

    // Guardar el array actualizado en localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Actualizar el icono en pantalla (si existe el botón)
    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

function volverHome(){
    Home();
}

function mostrarInformacion(){
    document.getElementById("informacion").classList.toggle("mostrar");
}



async function Detalle(parametro){
    
    var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const data = await res.json();


    // Revisar si este Pokémon ya está en favoritos
    favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(poke => poke.name === data.name);    
        
    let tipoPoke = "";
    for(let i = 0; i < data.types.length; i++){
        tipoPoke += `<span>${data.types[i].type.name}</span> `;
    }

    root.innerHTML = `
    <section class="c-detalle">

            <div class="detalle-header">
                <button id="volver"><</button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" alt="logo pokemon">
                <img src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png" alt="pokeball">
            </div>

            <div class="nombre">
                <p>${data.name}</p>
                <p>${data.id}</p>
                <p>${tipoPoke}</p>
            </div>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" height="120" width="auto">
            

            <div class="detalle-informacion">
                <button class="about" onClick="mostrarInformacion()">About</button>
                <button onClick="toggleFavorito(${data.id}, '${data.name}')">
                    <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
                </button>
                
            </div>

            <div class="informacion" id="informacion">
            <p>${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
            <p>${data.stats[0].base_stat}</p>
            <p>${data.stats[5].base_stat}</p>
            <p>${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
            <p>${data.stats[3].base_stat} Defensa Especial: </p>
            </div>
    </section>
    `;
}
