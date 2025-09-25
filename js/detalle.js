async function Pokemon(parametro){
    
    var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const data = await res.json();


    let tipoPoke = "";
    for(let i = 0; i < data.types.length; i++){
        tipoPoke += `<span>${data.types[i].type.name}</span> `;
    }

    root.innerHTML = `
    <section class="c-detalle">
            <img src="" alt="">
            <p>${data.name}</p>
            <p>${data.id}</p>
            <p>${tipoPoke}</p>
            <p>${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
            <p>${data.stats[0].base_stat}</p>
            <p>${data.stats[5].base_stat}</p>
            <p>${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
            <p>${data.stats[3].base_stat} Defensa Especial: </p>
    </section>
    `;
}

Pokemon("ditto");
Pokemon(45);
Pokemon(14);
Pokemon(1);
Pokemon(8);
Pokemon(4);