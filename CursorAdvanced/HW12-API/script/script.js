let heros = [];
function getHero () {
fetch("https://swapi.dev/api/films/2/")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const people = data.characters;
             people.forEach((i) =>{
             fetch(i)
             .then((response) => {
                return response.json();
            })
            .then((data) => {
            const protagonist = data;
            heros.push(protagonist);
            })
            })    
        return   heros;  
        
    }) 
   
   return  heros;  
}
getHero ();
console.log(heros);

