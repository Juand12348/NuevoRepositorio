async function Pokemon(parametro){
    
    var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const data = await res.json();

        console.log(data.forms[0].name);
}

Pokemon("ditto");