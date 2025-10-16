function Informativa() { 
    const root = document.getElementById("root");
    root.innerHTML = `
    <section class="informativa">
        <h1 class="titulo">PokéAPI App</h1>
        <p class="autor">Juan David Martínez Niño</p>
        <img class="logo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokéAPI"/>
        <div class="descripcion">
            <p>Aplicación que consume la PokéAPI para mostrar información de los Pokémon, sus tipos, habilidades y más.</p>
        </div>
        <p class="link"><a href="https://github.com/Juand12348" target="_blank">github.com/Juand12348</a></p>
        <p class="version">v 1.0.0</p>
    </section>
    `;
}
