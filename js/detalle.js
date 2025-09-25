async function Pokemon(parametro){
    
    var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const data = await res.json();

        root.innerHTML = `<div></div> ${data.forms[0].name}`;
}

Pokemon("ditto");
Pokemon(45);
Pokemon(14);
Pokemon(1);
Pokemon(8);
Pokemon(4);